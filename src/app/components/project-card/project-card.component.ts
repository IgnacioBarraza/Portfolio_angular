import { Component, Input } from '@angular/core';
import { ProjectCardProps } from '../../utils/interfaces';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-project-card',
  imports: [FontAwesomeModule, TranslocoModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() projectsData!: ProjectCardProps
  externalLink = faExternalLink
  github = faGithub

  goToDemo(link: string) {
    if (link.startsWith("https")) {
      window.open(link, "_blank")
    } else if (link) {
      window.open(`https://${link}`, "_blank")
    }
  }

  goToCode(link: string) {
    if (link.startsWith("https")) {
      window.open(link, "_blank")
    } else if (link) {
      window.open(`https://${link}`, "_blank")
    }
  }
}
