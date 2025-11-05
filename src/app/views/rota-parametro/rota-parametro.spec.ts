import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaParametro } from './rota-parametro';

describe('RotaParametro', () => {
  let component: RotaParametro;
  let fixture: ComponentFixture<RotaParametro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaParametro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaParametro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
