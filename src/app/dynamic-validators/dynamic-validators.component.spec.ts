import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicValidatorsComponent } from './dynamic-validators.component';

describe('DynamicValidatorsComponent', () => {
  let component: DynamicValidatorsComponent;
  let fixture: ComponentFixture<DynamicValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
