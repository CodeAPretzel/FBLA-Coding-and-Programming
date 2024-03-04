import { State } from "data/objects/state";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";

export type AsyncDispatch = ThunkDispatch<State, any, Action>;