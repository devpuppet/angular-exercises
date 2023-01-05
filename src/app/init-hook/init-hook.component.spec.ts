import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitHookComponent } from './init-hook.component';

describe('InitHookComponent', () => {
  let component: InitHookComponent;
  let fixture: ComponentFixture<InitHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitHookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
