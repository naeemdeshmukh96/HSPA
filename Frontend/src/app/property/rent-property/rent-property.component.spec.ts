import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyComponent } from './rent-property.component';

describe('RentPropertyComponent', () => {
  let component: RentPropertyComponent;
  let fixture: ComponentFixture<RentPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentPropertyComponent]
    });
    fixture = TestBed.createComponent(RentPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
