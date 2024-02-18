import { createReducer, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UserState } from "../objects/state";
import { IApiUser } from "@/data/interfaces";
import { loginUserAsync } from "../actions/user";
import update from "immutability-helper";

const defaultState: UserState = {
	token: "",
	currentUser: undefined
};

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IApiUser>) => {
	if (action?.payload){
		return state;
	}

	const { user, token } = action?.payload;

	return update(state, {
		currentUser: {
			$set: user
		},
		token: {
			$set: token
		},
	});
}

const reducerBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
	builder.addCase(loginUserAsync.fulfilled, handleLoginUserAsync);
};

export default createReducer(defaultState, reducerBuilder);