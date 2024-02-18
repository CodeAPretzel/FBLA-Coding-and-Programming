import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload } from "@/data/interfaces";

export const loginUserAsync = createAsyncThunk(
	"LOGIN_USER",
	async (payload : ILoginUserPayload) => {
		return { } as IApiUser;
	}
);
