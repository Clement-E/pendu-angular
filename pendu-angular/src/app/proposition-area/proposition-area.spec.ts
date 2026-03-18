import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionArea } from './proposition-area';

describe('PropositionArea', () => {
  let component: PropositionArea;
  let fixture: ComponentFixture<PropositionArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropositionArea],
    }).compileComponents();

    fixture = TestBed.createComponent(PropositionArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
