import { createAction } from "@reduxjs/toolkit";
import { Pages } from "data/objects/state";

export const setActivePage = createAction<Pages>("SET_ACTIVE_PAGE");