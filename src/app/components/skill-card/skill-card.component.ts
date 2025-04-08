import { Component, Input } from '@angular/core';
import { SkillsData } from '../../utils/interfaces';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skills!: SkillsData;
}
