import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aniacjapierwsza } from './aniacjapierwsza';

describe('Aniacjapierwsza', () => {
  let component: Aniacjapierwsza;
  let fixture: ComponentFixture<Aniacjapierwsza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aniacjapierwsza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aniacjapierwsza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
