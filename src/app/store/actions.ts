import { createAction, props } from "@ngrx/store";
import { AOEStrings } from "../model/aoe-strings";

export const loadStrings = createAction(
  '[Home Page] LOAD_STRINGS'
);
export const setStrings = createAction(
  '[Home Page] SET_STRINGS',
  props<{strings: AOEStrings}>()
);
