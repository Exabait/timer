import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wait-button',
  templateUrl: './wait-button.component.html',
  styleUrls: ['./wait-button.component.css']
})
export class WaitButtonComponent implements OnInit {

  @Input() isActive;
  @Input() onWaitClick;

  constructor() { }

  ngOnInit(): void {
  }
}
