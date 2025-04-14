import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  github = faGithub
  linkedin = faLinkedin
  email = faEnvelope
}
