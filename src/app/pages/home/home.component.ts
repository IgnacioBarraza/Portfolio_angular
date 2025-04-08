import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroSectionComponent, AboutComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
