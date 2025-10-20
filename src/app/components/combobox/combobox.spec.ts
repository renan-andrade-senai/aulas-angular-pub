import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combobox } from './combobox';

describe('Combobox', () => {
  let component: Combobox;
  let fixture: ComponentFixture<Combobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combobox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Combobox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
