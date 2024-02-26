import { ILoginUserPayload, IRegisterUserPayload } from "data/interfaces";
import { Request } from "data/api/network";

export const loginUser = (payload: ILoginUserPayload, token: string) => {
	return Request("login", token, "POST", undefined, payload);
}

export const registerUser = (payload: IRegisterUserPayload, token: string) => {
	return Request("register", token, "POST", undefined, payload);
}
