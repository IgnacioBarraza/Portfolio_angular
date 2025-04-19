import { Component, Input } from '@angular/core';
import { WorkExperienceProps } from '../../utils/interfaces';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-work-experience-card',
  imports: [TranslocoModule],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.css'
})
export class WorkExperienceCardComponent {
  @Input() workExperience!: WorkExperienceProps
}
