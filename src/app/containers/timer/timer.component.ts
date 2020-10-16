import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Dispatcher} from '../../store/timer/dispatcher';
import {Selectors} from '../../store/timer/selectors';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private dispatcher: Dispatcher,
              private selector: Selectors) {
  }

  public timer: string;
  public isActive = false;

  private counter;
  private subscription;

  ngOnInit(): void {
    this.counter = new Observable(subscriber => {
      setInterval(() => subscriber.next(), 1000);
    });

    this.selector.counter().subscribe((timer) => this.timer = timer);
  }

  tick = () => {
    this.dispatcher.tick();
  };

  toggle = () => {
    this.isActive ? this.stop() : this.start();
  };

  start = () => {
    this.subscription = this.counter.subscribe(this.tick);
    this.isActive = !this.isActive;
  };

  stop = () => {
    this.wait();
    this.reset();
  };

  wait = () => {
    this.subscription?.unsubscribe();
    this.isActive = !this.isActive;
  };

  reset = () => {
    this.dispatcher.reset();
  };
}
