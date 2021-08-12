import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentagePieComponent } from './percentage-pie.component';

describe('PercentagePieComponent', () => {
  let component: PercentagePieComponent;
  let fixture: ComponentFixture<PercentagePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentagePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentagePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
