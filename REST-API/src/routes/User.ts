import express from "express";
import { userModel } from "API/Models";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { generateAccessToken } from "API/Middleware";
import { readConfig } from "API/Utils/config";

export const userRouter = express.Router();
const config = readConfig();

/* eslint-disable @typescript-eslint/no-explicit-any */
userRouter.post("/register", async (req, res) => {
	if ((req.body.username as string).length > 70 || (req.body.email as string).length > 70) {
		res.status(400).json({ message: "Character limit must be 70 or less" });
	}

	const hash = await bcrypt.hash(req.body.password, config.passwordSalt);

	const data = new userModel({
		uuid: req.body.uuid ?? uuidv4(),
		username: req.body.username,
		email: req.body.email,
		password: hash
	});

	try {
		await data.save();

		const token = generateAccessToken(data.uuid);
		res.status(200).json(token);
	}
	catch(error: any) {
		res.status(400).json({ message: error.message });
	}
});
/* eslint-disable @typescript-eslint/no-explicit-any */

userRouter.post("/login", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const user = await userModel.findOne({
		username
	}, { _id: 0, __v: 0 });

	if (user) {
		const isValid = await bcrypt.compare(password, user.password);

		if (isValid) {
			const token = generateAccessToken(user.username);
			res.status(200).json({
				token,
				user
			});
		} else {
			res.status(400).json({ error: "Invalid Password" });
		}
	}
});
