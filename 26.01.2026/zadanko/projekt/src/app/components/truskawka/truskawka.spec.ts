import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truskawka } from './truskawka';

describe('Truskawka', () => {
  let component: Truskawka;
  let fixture: ComponentFixture<Truskawka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Truskawka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Truskawka);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
