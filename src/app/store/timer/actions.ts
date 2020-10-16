import { createAction } from '@ngrx/store';

export const reset = createAction('[Timer] Reset Timer');
export const tick = createAction('[Timer] Tick Timer');
