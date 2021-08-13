import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomforestComponent } from './randomforest.component';

describe('RandomforestComponent', () => {
  let component: RandomforestComponent;
  let fixture: ComponentFixture<RandomforestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomforestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomforestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
