import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, ContactFormComponent, TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  github = faGithub
  linkedin = faLinkedin
  email = faEnvelope
}
