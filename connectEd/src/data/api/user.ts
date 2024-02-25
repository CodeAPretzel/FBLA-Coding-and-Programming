import { ILoginUserPayload, IRegisterUserPayload } from "../interfaces";
import { Request } from "./network";

export const loginUser = (payload: ILoginUserPayload, token: string) => {
	return Request("login", token, "POST", undefined, payload);
}

export const registerUser = (payload: IRegisterUserPayload, token: string) => {
	return Request("register", token, "POST", undefined, payload);
}
