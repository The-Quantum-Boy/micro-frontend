import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMeTextComponent } from './change-me-text.component';

describe('ChangeMeTextComponent', () => {
  let component: ChangeMeTextComponent;
  let fixture: ComponentFixture<ChangeMeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
