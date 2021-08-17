import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisationbarComponent } from './comparisationbar.component';

describe('ComparisationbarComponent', () => {
  let component: ComparisationbarComponent;
  let fixture: ComponentFixture<ComparisationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisationbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
