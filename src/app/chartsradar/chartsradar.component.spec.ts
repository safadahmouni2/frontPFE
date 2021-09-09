import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsradarComponent } from './chartsradar.component';

describe('ChartsradarComponent', () => {
  let component: ChartsradarComponent;
  let fixture: ComponentFixture<ChartsradarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsradarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});