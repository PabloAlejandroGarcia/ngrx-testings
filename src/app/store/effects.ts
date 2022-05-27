import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, retry, skipWhile, switchMap, tap } from "rxjs";
import { AoeHTTPService } from "../services/aoe-http.service";
import { errorLoadingLeaderboard, errorLoadingStrings, loadLeaderboard, loadStrings, setLeaderboard, setStrings } from "./actions";
import { AOEState } from "./reducers";
import { leaderboardStrings } from "./selectors";

@Injectable()
export class AppEffects {
  loadStrings$ = createEffect(() => this.actions$.pipe(
    ofType(loadStrings),
    mergeMap(() => this.aoeHTTPService.getInitialData()
      .pipe(
        map(strings => (setStrings({strings}))),
        retry(3),
        catchError(() => of(errorLoadingStrings))
      )
    )
  ))

  loadLeaderboard$ = createEffect(() => this.actions$.pipe(
    ofType(loadLeaderboard),
    switchMap((action) => this.store.select(leaderboardStrings).pipe(
      skipWhile(leaderboardStrings => leaderboardStrings === undefined),
      mergeMap((leaderboardStrings) => this.aoeHTTPService.getLeaderboard(
        leaderboardStrings[action.index].id,
        action.count
      )
      .pipe(
        map(leaderboard => (setLeaderboard({leaderboard}))),
        retry(3),
        catchError(() => of(errorLoadingLeaderboard))
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
