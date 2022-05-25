import { createReducer, on } from "@ngrx/store";
import { AOEStrings } from "../model/aoe-strings"
import { AOEActions } from "./action-types";

export interface AOEState {
  strings: AOEStrings
}

export const initialState = {
  strings: {}
};

export const AOEReducer = createReducer(
  initialState,
  on(
    AOEActions.setStrings, (state, action) => ({...state, strings: action.strings})
  )
)
