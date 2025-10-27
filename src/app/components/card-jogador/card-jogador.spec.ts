import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJogador } from './card-jogador';

describe('CardJogador', () => {
  let component: CardJogador;
  let fixture: ComponentFixture<CardJogador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJogador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJogador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
