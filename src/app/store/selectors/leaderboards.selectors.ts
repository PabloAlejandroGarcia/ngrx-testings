import { createFeatureSelector, createSelector } from "@ngrx/store";
import { leaderboardsSelectors, LeaderboardsState, LEADERBOARDS_FEATURE_STORE_KEY } from "../reducers/leaderboards.reducer";

export const selectLeaderboardsState = createFeatureSelector<LeaderboardsState>(LEADERBOARDS_FEATURE_STORE_KEY);

export const selectLeaderboards = createSelector(
  selectLeaderboardsState,
  leaderboardsSelectors.selectAll
)
