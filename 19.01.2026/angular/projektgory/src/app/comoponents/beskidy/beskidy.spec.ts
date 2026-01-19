import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beskidy } from './beskidy';

describe('Beskidy', () => {
  let component: Beskidy;
  let fixture: ComponentFixture<Beskidy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Beskidy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Beskidy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
