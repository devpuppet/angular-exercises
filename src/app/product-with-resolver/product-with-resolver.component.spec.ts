import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithResolverComponent } from './product-with-resolver.component';

describe('ProductWithResolverComponent', () => {
  let component: ProductWithResolverComponent;
  let fixture: ComponentFixture<ProductWithResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
