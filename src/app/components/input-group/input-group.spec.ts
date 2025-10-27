import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroup } from './input-group';

describe('InputGroup', () => {
  let component: InputGroup;
  let fixture: ComponentFixture<InputGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
