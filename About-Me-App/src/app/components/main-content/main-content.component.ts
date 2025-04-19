import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AchievementsAndCertsComponent } from '../achievements-and-certs/achievements-and-certs.component';
import { ExperienceComponent } from '../experience/experience.component';
import { InterestsComponent } from '../interests/interests.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-main-content',
  imports: [AboutMeComponent, AchievementsAndCertsComponent, ExperienceComponent, InterestsComponent, SkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {

}
