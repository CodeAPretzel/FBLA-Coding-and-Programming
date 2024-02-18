import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";
import navReducer from "../reducers/navigation";

const reducerMap = {
	User: userReducer,
	Navigation: navReducer
};

export const store = configureStore({
	reducer: reducerMap
});
