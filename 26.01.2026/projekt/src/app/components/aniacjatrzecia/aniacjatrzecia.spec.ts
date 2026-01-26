import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aniacjatrzecia } from './aniacjatrzecia';

describe('Aniacjatrzecia', () => {
  let component: Aniacjatrzecia;
  let fixture: ComponentFixture<Aniacjatrzecia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aniacjatrzecia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aniacjatrzecia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
