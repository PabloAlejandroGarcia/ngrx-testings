import { createAction, props } from "@ngrx/store";
import { AOELeaderboard } from "../model/aoe-leaderboard";
import { AOEStrings } from "../model/aoe-strings";

export const loadStrings = createAction(
  '[Home Page] LOAD_STRINGS'
);
export const setStrings = createAction(
  '[AOE API] SET_STRINGS',
  props<{strings: AOEStrings}>()
);
export const errorLoadingStrings = createAction(
  '[AOE API] ERROR_LOADING_STRINGS'
);
export const loadLeaderboard = createAction(
  '[Home Page] LOAD_LEADERBOARD'
);
export const setLeaderboard = createAction(
  '[AOE API] SET_LEADERBOARD',
  props<{leaderboard: AOELeaderboard}>()
);
export const errorLoadingLeaderboard = createAction(
  '[AOE API] ERROR_LOADING_LEADERBOARD'
);
