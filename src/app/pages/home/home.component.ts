import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroSectionComponent, AboutComponent, SkillsComponent, WorkExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
