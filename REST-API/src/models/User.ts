import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	uuid: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String
	},
	username: {
		required: true,
		type: String
	},
	password: {
		required: true,
		type: String
	}
}, { collection: 'info' });

export const userModel = mongoose.model("user", userSchema);
