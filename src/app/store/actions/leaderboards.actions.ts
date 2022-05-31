import { createAction, props } from "@ngrx/store";
import { AOELeaderboard } from "src/app/model/aoe-leaderboard";

export const loadLeaderboard = createAction(
  '[Home Page] LOAD_LEADERBOARD',
  props<{index: number, count: number}>()
);
export const setLeaderboard = createAction(
  '[AOE API] SET_LEADERBOARD',
  props<{leaderboard: AOELeaderboard}>()
);
export const errorLoadingLeaderboard = createAction(
  '[AOE API] ERROR_LOADING_LEADERBOARD'
);
