import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-text',
  imports: [CommonModule],
  templateUrl: './vertical-text.component.html',
  styleUrl: './vertical-text.component.css'
})
export class VerticalTextComponent {
  @Input() text: string = '';
  @Input() class?: string;
}
