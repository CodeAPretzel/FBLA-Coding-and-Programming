import { createReducer, PayloadAction, ActionReducerMapBuilder, Action } from "@reduxjs/toolkit";
import { NavigationState, Pages } from "data/objects/state";
import { setActivePage } from "data/actions/navigation";
import update from "immutability-helper";

const defaultState: NavigationState = {
	currentPage: Pages.LOGIN
};

const handleSetActivePage = (state: NavigationState, action: PayloadAction<Pages>) => {
	if (!action?.payload){
		return state;
	}

	return update(state, {
		currentPage: {
			$set: action?.payload
		}
	});
}

const reducerBuilder = (builder: ActionReducerMapBuilder<NavigationState>) => {
	builder.addCase(setActivePage.type, handleSetActivePage);
};

export default createReducer(defaultState, reducerBuilder);
