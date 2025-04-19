import { Component } from '@angular/core';
import { VerticalTextComponent } from "../../components/vertical-text/vertical-text.component";
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-hero-section',
  imports: [VerticalTextComponent, TranslocoModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
