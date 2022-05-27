import { createReducer, on } from "@ngrx/store";
import { AOELeaderboard } from "../model/aoe-leaderboard";
import { AOEStrings } from "../model/aoe-strings"
import { AOEActions } from "./action-types";

export interface AOEState {
  strings: AOEStrings,
  leaderboards: AOELeaderboard
}

export const initialState = {
  strings: {}
};

export const AOEReducer = createReducer(
  initialState,
  on(
    AOEActions.setStrings, (state, action) => ({...state, strings: action.strings})
  ),
  on(
    AOEActions.setLeaderboard, (state, action) =>({...state, leaderboards: action.leaderboard})
  )
)
