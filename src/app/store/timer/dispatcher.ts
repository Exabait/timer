import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as actions from './actions';

@Injectable()
export class Dispatcher {
  constructor(private store: Store) {
  }

  reset = () => this.store.dispatch(actions.reset());
  tick = () => this.store.dispatch(actions.tick());
}
