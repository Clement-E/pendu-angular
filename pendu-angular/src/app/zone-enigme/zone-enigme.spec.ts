import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneEnigme } from './zone-enigme';

describe('ZoneEnigme', () => {
  let component: ZoneEnigme;
  let fixture: ComponentFixture<ZoneEnigme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneEnigme],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoneEnigme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
