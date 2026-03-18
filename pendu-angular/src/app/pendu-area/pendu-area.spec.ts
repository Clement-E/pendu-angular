import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenduArea } from './pendu-area';

describe('PenduArea', () => {
  let component: PenduArea;
  let fixture: ComponentFixture<PenduArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenduArea],
    }).compileComponents();

    fixture = TestBed.createComponent(PenduArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
