import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReajusteSalario } from './reajuste-salario';

describe('ReajusteSalario', () => {
  let component: ReajusteSalario;
  let fixture: ComponentFixture<ReajusteSalario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReajusteSalario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReajusteSalario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
