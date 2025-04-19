import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAndCertsComponent } from './achievements-and-certs.component';

describe('AchievementsAndCertsComponent', () => {
  let component: AchievementsAndCertsComponent;
  let fixture: ComponentFixture<AchievementsAndCertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsAndCertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsAndCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
