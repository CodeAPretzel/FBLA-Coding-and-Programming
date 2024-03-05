import { createReducer, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UserState } from "data/objects/state";
import { IApiUser } from "@/data/interfaces";
import { loginUserAsync } from "data/actions/user";

const defaultState: UserState = {
	token: "",
	currentUser: undefined
};

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IApiUser>) => {
	if (!action.payload){
		return state;
	}

	const { user: { username, uuid, email }, token } = action?.payload;

	const newUser = {
		uuid,
		username,
		email
	};

	state.currentUser = newUser;
	state.token = token;
}

const reducerBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
	builder.addCase(loginUserAsync.fulfilled.type, handleLoginUserAsync);
};

export default createReducer(defaultState, reducerBuilder);