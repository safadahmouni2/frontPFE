import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatspieComponent } from './chatspie.component';

describe('ChatspieComponent', () => {
  let component: ChatspieComponent;
  let fixture: ComponentFixture<ChatspieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatspieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatspieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
