import { createSelector } from "@reduxjs/toolkit";
import { State, UserState } from "../objects/state";

const getUserState = (state: State) => {
	return state?.User;
};

const getUserToken = (state: UserState) => {
	return state?.token;
};

export const getAuthToken = createSelector(
	getUserState,
	getUserToken
);