import {Injectable} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from '../index';

const getHours = (state: State) => state.timer.hours;
const getMinutes = (state: State) => state.timer.minutes;
const getSeconds = (state: State) => state.timer.seconds;

@Injectable()
export class Selectors {
  constructor(private store: Store) {
  }

  counter(): Observable<string> {
    return this.store.select(
      createSelector(
        getHours,
        getMinutes,
        getSeconds,
        (hours, minutes, seconds) => `${hours}:${minutes}:${seconds}`
      )
    );
  }
}
