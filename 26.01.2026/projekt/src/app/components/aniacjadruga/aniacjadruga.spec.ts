import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aniacjadruga } from './aniacjadruga';

describe('Aniacjadruga', () => {
  let component: Aniacjadruga;
  let fixture: ComponentFixture<Aniacjadruga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aniacjadruga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aniacjadruga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
