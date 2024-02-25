import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "@/data/interfaces";
import * as UserAPI from "../api/user"
import { State } from "../objects/state";
import { getAuthToken } from "../selectors/user";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, { state: State }>(
	"LOGIN_USER",
	async (payload : ILoginUserPayload, { getState }) => {
		return UserAPI.loginUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
	}
);

export const registerUserAsync = createAsyncThunk<IApiUser, IRegisterUserPayload, { state: State }>(
	"REGISTER_USER",
	async (payload: IRegisterUserPayload, { getState }) => {
		return UserAPI.registerUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
	}
);
