import { createAction } from "@reduxjs/toolkit";
import { Pages } from "../objects/state";

export const setActivePage = createAction<Pages>("SET_ACTIVE_PAGE");