import { Component } from '@angular/core'
import workExperienceJson from '../../utils/work-experience.json'
import { WorkExperienceCardComponent } from '../../components/work-experience-card/work-experience-card.component'
import { TranslocoModule } from '@jsverse/transloco'

@Component({
  selector: 'app-work-experience',
  imports: [WorkExperienceCardComponent, TranslocoModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience = workExperienceJson
}
