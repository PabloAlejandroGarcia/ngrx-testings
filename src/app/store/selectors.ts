import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AOEState } from "./reducers";

export const selectAOEState =
  createFeatureSelector<AOEState>('aoe-state');

export const baseStrings = createSelector(
  selectAOEState,
  (state) => state.strings
)

export const leaderboardStrings = createSelector(
  baseStrings,
  (strings) => strings.leaderboard ? strings.leaderboard.filter(item => item.id > 0) : []
)
