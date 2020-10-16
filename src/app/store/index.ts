import * as timer from './timer/reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  timer: timer.Counter;
}

export const reducers: ActionReducerMap<State> = {
  timer: timer.reducer,
};
