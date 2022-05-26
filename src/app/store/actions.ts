import { createAction, props } from "@ngrx/store";
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
)
