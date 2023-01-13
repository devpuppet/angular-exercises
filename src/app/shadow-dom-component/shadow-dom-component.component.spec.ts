import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomComponentComponent } from './shadow-dom-component.component';

describe('ShadowDomComponentComponent', () => {
  let component: ShadowDomComponentComponent;
  let fixture: ComponentFixture<ShadowDomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDomComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowDomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
