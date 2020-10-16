import {Component, Input, OnInit} from '@angular/core';
import {Dispatcher} from '../../store/timer/dispatcher';
import {Selectors} from '../../store/timer/selectors';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

  @Input() isActive = false;
  @Input() onStartClick;

  constructor() { }

  ngOnInit(): void {}


}
