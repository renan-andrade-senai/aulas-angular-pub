import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabela } from './tabela';

describe('Tabela', () => {
  let component: Tabela;
  let fixture: ComponentFixture<Tabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
