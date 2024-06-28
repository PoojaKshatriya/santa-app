import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishComponent } from './make-wish.component';

describe('MakeWishComponent', () => {
  let component: MakeWishComponent;
  let fixture: ComponentFixture<MakeWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeWishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
