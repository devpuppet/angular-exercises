import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRouteComponent } from './static-route.component';

describe('StaticRouteComponent', () => {
  let component: StaticRouteComponent;
  let fixture: ComponentFixture<StaticRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
