

import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { AOELeaderboard } from 'src/app/model/aoe-leaderboard';
import { LeaderboardsActions } from '../actions/action-types';

export const LEADERBOARDS_FEATURE_STORE_KEY = 'leaderboards';

export interface LeaderboardsState extends EntityState<AOELeaderboard> {};

export const adapter = createEntityAdapter<AOELeaderboard>({
  selectId: leaderboard => leaderboard.leaderboard_id
});

export const initialAOELeaderboardsState = adapter.getInitialState();

export const AOELeaderboardsReducer = createReducer(
  initialAOELeaderboardsState,
  on(LeaderboardsActions.setLeaderboard,
    (state, action) => adapter.addOne(
      action.leaderboard,
      state
    )
  )
);

export const leaderboardsSelectors = adapter.getSelectors();
