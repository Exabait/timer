import {createReducer, on} from '@ngrx/store';
import * as actions from './actions';

export interface Counter {
  hours: number;
  minutes: number;
  seconds: number;
}

const initialState: Counter = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const reducer = createReducer(
  initialState,
  on(
    actions.reset,
    () => ({...initialState})
  ),
  on(
    actions.tick,
    (state) => {
      let {hours, minutes, seconds} = state;

      if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
          minutes = 0;
          hours++;
        } else {
          minutes++;
        }
      } else {
        seconds++;
      }

      return {hours, minutes, seconds};
    }),
);
