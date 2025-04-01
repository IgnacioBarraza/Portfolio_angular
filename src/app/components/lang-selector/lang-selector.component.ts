import { Component } from '@angular/core';
import { Language } from '../../utils/interfaces';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lang-selector',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css'
})
export class LangSelectorComponent {
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
  isOpen: boolean = false
  languages: Language[] = [
    { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
    { code: "es", name: "Spanish", nativeName: "Español", flag: "🇨🇱" },
    { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  ]
  selectedLang: Language = this.languages[1]

  selectLanguage(lang: Language) {
    this.selectedLang = lang
    this.isOpen = false
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen
  }
}
