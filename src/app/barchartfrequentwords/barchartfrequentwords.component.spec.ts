import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartfrequentwordsComponent } from './barchartfrequentwords.component';

describe('BarchartfrequentwordsComponent', () => {
  let component: BarchartfrequentwordsComponent;
  let fixture: ComponentFixture<BarchartfrequentwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartfrequentwordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartfrequentwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
