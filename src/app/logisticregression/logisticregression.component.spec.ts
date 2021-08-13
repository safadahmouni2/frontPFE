import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticregressionComponent } from './logisticregression.component';

describe('LogisticregressionComponent', () => {
  let component: LogisticregressionComponent;
  let fixture: ComponentFixture<LogisticregressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticregressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticregressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
