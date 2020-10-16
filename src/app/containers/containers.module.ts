import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {TimerComponent} from './timer/timer.component';
import {Selectors} from '../store/timer/selectors';
import {Dispatcher} from '../store/timer/dispatcher';



@NgModule({
  declarations: [
    TimerComponent,
  ],
  exports: [
    TimerComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [Selectors, Dispatcher]
})
export class ContainersModule { }
