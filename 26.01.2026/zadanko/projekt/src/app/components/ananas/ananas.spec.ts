import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ananas } from './ananas';

describe('Ananas', () => {
  let component: Ananas;
  let fixture: ComponentFixture<Ananas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ananas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ananas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
