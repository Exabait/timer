import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  @Input() onResetClick;
  @Input() isActive;

  constructor() { }

  ngOnInit(): void {
  }
}
