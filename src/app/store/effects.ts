import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, retry } from "rxjs";
import { AoeHTTPService } from "../services/aoe-http.service";
import { AOEActions } from "./actions/action-types";

@Injectable()
export class AppEffects {
  loadStrings$ = createEffect(() => this.actions$.pipe(
    ofType(AOEActions.loadStrings),
    mergeMap(() => this.aoeHTTPService.getInitialData()
      .pipe(
        map(strings => (AOEActions.setStrings({strings}))),
        retry(3),
        catchError(() => of(AOEActions.errorLoadingStrings))
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private aoeHTTPService: AoeHTTPService
  ) {}

}
