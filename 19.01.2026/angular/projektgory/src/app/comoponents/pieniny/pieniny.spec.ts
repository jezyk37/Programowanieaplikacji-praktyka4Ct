import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pieniny } from './pieniny';

describe('Pieniny', () => {
  let component: Pieniny;
  let fixture: ComponentFixture<Pieniny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pieniny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pieniny);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
