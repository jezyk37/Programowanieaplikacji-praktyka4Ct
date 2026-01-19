import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tatry } from './tatry';

describe('Tatry', () => {
  let component: Tatry;
  let fixture: ComponentFixture<Tatry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tatry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tatry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
