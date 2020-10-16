import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-second-timer',
  templateUrl: './second-timer.component.html',
  styleUrls: ['./second-timer.component.css']
})
export class SecondTimerComponent implements OnInit {

  constructor() {
  }

  public seconds = 0;
  public minutes = 0;
  public hours = 0;
  public isActive = false;

  private secondsCount;
  private counterSubscription;

  ngOnInit(): void {
    this.secondsCount = new Observable(subscriber => {
      setInterval(() => subscriber.next(), 1000);
    });
  }

  tick = () => {
    this.setSeconds();
    this.setMinutes();
  }

  setSeconds = () => {
    if (this.seconds === 59) {
      this.seconds = 0;
      this.minutes++;
    } else {
      this.seconds++;
    }
  }

  setMinutes = () => {
    if (this.minutes === 59 && this.seconds === 59) {
      this.minutes = 0;
      this.hours++;
    }
  }

  toggle = () => {
    this.isActive ? this.stop() : this.start();
  }

  start = () => {
    this.counterSubscription = this.secondsCount.subscribe(this.tick);
    this.isActive = !this.isActive;
  }

  stop = () => {
    this.wait();
    this.reset();
  }

  wait = () => {
    this.counterSubscription?.unsubscribe();
    this.isActive = !this.isActive;
  }

  reset = () => {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}
