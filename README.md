<div align = center>

# - ConnectEd -

<br>

<p>
  | &nbsp &nbsp &nbsp Kyle Smith &nbsp &nbsp &nbsp |
</p>

<a name="connected-download"></a>
<br>

<img src="./README-files/readme-logo.png" alt="ConnectEd" height="25%" width="25%">

<br>
<br>
<br>

[<kbd> <br> DOWNLOAD .EXE <br> </kbd>][KBD]

<br>

[<kbd> <br> GO TO DOCUMENTATION <br> </kbd>][GOTO]

</div>

<br>
<br>

<!--------------------------------- Documentation Table ------------------------------------------->

<a name="documentation"></a>
### Documentation
<ul>
  <li><a href="#connected-about">ConnectEd About 📜</a></li>
  <li><a href="#connected-requirements">ConnectEd Requirements 📑</a></li>
  <li><a href="#connected-download">ConnectEd Download 🔧</a></li>
  <li><a href="#connected-inner-workings">ConnectEd Inner Workings :gear:</a></li>
  <li><a href="#connected-recognition">ConnectEd Recognition :sparkles:</a></li>
  <li><a href="#connected-future-developments">ConnectEd Future Developments :ballot_box_with_check:</a></li>
</ul>

<br>
<br>

<!--------------------------------- ConnectEd About ------------------------------------------->

<a name="connected-about"></a>
### ConnectEd About 📜
Whether someone in a school's Career and Technical Education Department is trying to store business information or someone wanting to store general data, ConnectEd allows the ability for users to store, navigate, modify, and integrate data into their work or personal projects.
<br>

<!--><li></li><br>

This software application stores user's data on a secure network that can be easily retrieved by user's authentication in the form of a password and username. This allows the user to easily come back to the application and pick back up from where they left off without having to store any of this data on their local machine.

<br>
<br>

<!--------------------------------- ConnectEd Requirements ------------------------------------------->

<a name="connected-requirements"></a>
### ConnectEd Requirements 📑
This software meets the requirements illustrated in the guidlines here: [FBLA GUIDELINES](https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Coding--Programming.pdf)

- [x] The software should be an executable/program for the user to use.
  - Software can be installed and used by an executable file.
- [x] The software should contain some form of adding, filtering, and modifying data that comes up to over 25.
  - Software contains an intuitive user-interface to add, filter, and modify data that exceeds the 25 count.
- [x] The software should allow a school's Career and Technical Education Department to use this program.
  - Software allows a school's Career and Technical Education Department or anyone to use this program for their purposes.
- [x] The software should store data that the user provides.
  - Software can either store data on its own server or the local machine of the user.
- [x] The software should have an intuitive user-interface.
  - Software has an incredible user-interface that a user can navigate easily.

<br>
<br>

<!--------------------------------- ConnectEd Inner Workings ------------------------------------------->

<a name="connected-inner-workings"></a>
### ConnectEd Inner Workings :gear:
This application is structured in <b>two</b> main parts. The first part is the communication between our application programming interface <a href="https://aws.amazon.com/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses.">`(API)`</a> and our MongoDB server. Whenever the API receives a username and password from the user, it sends a request to the MongoDB server, validates the response, and sends feedback to the user to either accept the user into the software application or deny them.

<br>

Below is a snippet of the API's POST request to the server to validate the user's username, password, and authenticate their token for the session.

<br>

```ts
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
```

<br>
<br>

To Further demonstrate this point, below is a simple diagram showing this process:

<br>

`User Sends Request to API    -->    API Checks and Validates from MongoDB    -->    User is Either Granted or Denied Access`
  

<br>
<br>

<!--------------------------------- ConnectEd Recognition ------------------------------------------->

<a name="connected-recognition"></a>
### ConnectEd Recognition :sparkles:
This application was made possible by the following open-source projects:
1. [Electron + Vite + React Framework](https://github.com/electron-vite/electron-vite-react)
2. [MongoDB](https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F65b5a84202061c3376f08ded&nextHash=%23clusters%2Fdetail%2FUserProfileDB&signedOut=true)
3. [REST-API](https://github.com/SGEhren-dev/REST-API-Framework)
4. [MUI X](https://mui.com/)

Electron framework is made by the electron-vite team and is licensed under the [`MIT License`](https://github.com/electron-vite/electron-vite-react?tab=MIT-1-ov-file).<br>
MongoDB is made by Mongo Inc. and is licensed under the [`Server Side Public License`](https://www.mongodb.com/legal/licensing/server-side-public-license).<br>
REST-API was made by SGEhren-dev and is not publically licensed.<br>
MUI X is a datagrid framework made by the Material UI SAS team and is licensed under the [`MIT License`](https://www.tldrlegal.com/license/mit-license) for community members.

![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<br>
<br>

<!--------------------------------- ConnectEd Future Developments ------------------------------------------->

<a name="connected-future-developments"></a>
### ConnectEd Future Developments :ballot_box_with_check:
- [ ] Allow User to Reset Password
- [ ] Allow Email Verification
- [ ] Allow Multiple CSV Files to be Uploaded Per User
- [ ] Allow Setting for Dark/Light Modes
- [ ] Allow Notifications for Multiple Device Sign-In

<br>

<hr>
<hr>

<!--------------------------------- Variables ------------------------------------------->

[KBD]: https://github.com/CodeAPretzel/FBLA-Coding-and-Programming/raw/main/ConnectEd.exe
[GOTO]: #documentation
