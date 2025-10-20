import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComp } from './primeiro-comp';

describe('PrimeiroComp', () => {
  let component: PrimeiroComp;
  let fixture: ComponentFixture<PrimeiroComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
