import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { AOELeaderboard } from "../model/aoe-leaderboard";
import { AOEStrings } from "../model/aoe-strings"
import { AOEActions } from "./actions/action-types";

export interface AOEState {
  strings: AOEStrings,
  leaderboards: EntityState<AOELeaderboard>
}

export const leaderboardsAdapter = createEntityAdapter<AOELeaderboard>();

export const initialState = {
  strings: {}
};

export const AOEReducer = createReducer(
  initialState,
  on(
    AOEActions.setStrings, (state, action) => ({...state, strings: action.strings})
  )
)
