import { Component, Input } from '@angular/core';
import { SkillsData } from '../../utils/interfaces';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-skill-card',
  imports: [TranslocoModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skills!: SkillsData;
}
