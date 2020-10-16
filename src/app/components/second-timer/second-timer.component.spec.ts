import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTimerComponent } from './second-timer.component';

describe('SecondTimerComponent', () => {
  let component: SecondTimerComponent;
  let fixture: ComponentFixture<SecondTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
