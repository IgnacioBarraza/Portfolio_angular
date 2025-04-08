import { Component } from '@angular/core';
import { SkillCardComponent } from "../../components/skill-card/skill-card.component";
import skillsJson from '../../utils/skills.json'

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = skillsJson
}
