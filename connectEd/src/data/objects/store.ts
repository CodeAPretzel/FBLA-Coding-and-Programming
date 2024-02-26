import { configureStore } from "@reduxjs/toolkit";
import userReducer from "data/reducers/user";
import navReducer from "data/reducers/navigation";

const reducerMap = {
	User: userReducer,
	Navigation: navReducer
};

export const store = configureStore({
	reducer: reducerMap
});
