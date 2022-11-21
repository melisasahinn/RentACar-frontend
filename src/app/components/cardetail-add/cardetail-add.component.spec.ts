import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetailAddComponent } from './cardetail-add.component';

describe('CardetailAddComponent', () => {
  let component: CardetailAddComponent;
  let fixture: ComponentFixture<CardetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardetailAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
