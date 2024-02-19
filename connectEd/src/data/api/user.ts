import { ILoginUserPayload } from "../interfaces";
import { Request } from "./network";

export const loginUser = (payload: ILoginUserPayload) => {
	return Request("login", "POST", undefined, payload);
}
