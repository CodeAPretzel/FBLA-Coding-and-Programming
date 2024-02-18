export interface IApiUser {
	token: string;
	user: IUser;
}

export interface IUser {
	email: string;
	username: string;
}

export interface ILoginUserPayload {
	username: string;
	password: string;
}