import { Component, Input } from '@angular/core';
import { WorkExperienceProps } from '../../utils/interfaces';

@Component({
  selector: 'app-work-experience-card',
  imports: [],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.css'
})
export class WorkExperienceCardComponent {
  @Input() workExperience!: WorkExperienceProps
}
