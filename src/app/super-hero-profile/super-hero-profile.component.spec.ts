import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroProfileComponent } from './super-hero-profile.component';

describe('SuperHeroProfileComponent', () => {
  let component: SuperHeroProfileComponent;
  let fixture: ComponentFixture<SuperHeroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
