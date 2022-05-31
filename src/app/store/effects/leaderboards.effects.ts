import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, retry } from "rxjs";
import { AoeHTTPService } from "src/app/services/aoe-http.service";
import { LeaderboardsActions } from "../actions/action-types";
import { AOEState } from "../reducers";
import { leaderboardStrings } from "../selectors";

@Injectable()
export class LeaderboardEffects {
  loadLeaderboard$ = createEffect(() => this.actions$.pipe(
    ofType(LeaderboardsActions.loadLeaderboard),
    mergeMap((action) => this.store.select(leaderboardStrings).pipe(
      mergeMap(() => this.aoeHTTPService.getLeaderboard(
        action.index,
        action.count
      )
      .pipe(
        map(leaderboard => (LeaderboardsActions.setLeaderboard({leaderboard}))),
        retry(3),
        catchError(() => of(LeaderboardsActions.errorLoadingLeaderboard))
      )
    )
    ))
  ))
  constructor(
    private actions$: Actions,
    private aoeHTTPService: AoeHTTPService,
    private store: Store<AOEState>
  ) {}
}
