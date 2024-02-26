import { createSelector } from "@reduxjs/toolkit";
import { State, NavigationState } from "data/objects/state";

const getNavState = (state: State) => {
	return state.Navigation;
};

const currentPage = (state: NavigationState) => {
	return state.currentPage;
}

export const getCurrentPage = createSelector(
	getNavState,
	currentPage
);