import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component'
import projectsDataJson from "../../utils/projects.json";
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, TranslocoModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectsData = projectsDataJson;
}
