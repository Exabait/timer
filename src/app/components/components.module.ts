import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartButtonComponent} from './start-button/start-button.component';
import {WaitButtonComponent} from './wait-button/wait-button.component';
import {ResetButtonComponent} from './reset-button/reset-button.component';
import {SecondTimerComponent} from './second-timer/second-timer.component';



@NgModule({
  declarations: [StartButtonComponent, WaitButtonComponent, ResetButtonComponent, SecondTimerComponent],
  imports: [
    CommonModule
  ],
  exports: [StartButtonComponent, WaitButtonComponent, ResetButtonComponent, SecondTimerComponent]
})
export class ComponentsModule { }
