import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, retry } from "rxjs";
import { AoeHTTPService } from "../services/aoe-http.service";
import { errorLoadingStrings, loadStrings, setStrings } from "./actions";

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

  constructor(
    private actions$: Actions,
    private aoeHTTPService: AoeHTTPService
  ) {}

}
