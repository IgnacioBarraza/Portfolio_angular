import { Component, HostListener } from '@angular/core'
import { NavItem } from "../../utils/interfaces";
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from "../lang-selector/lang-selector.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LangSelectorComponent, FontAwesomeModule, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  faBars = faBars
  faX = faX
  scrolled: boolean = false
  isOpen: boolean = false

  navItems: NavItem[] = [
    { label: 'navbar.about', japaneseLabel: '私', href: '#about' },
    { label: 'navbar.skill', japaneseLabel: '技', href: '#skills' },
    { label: 'navbar.experience', japaneseLabel: '目', href: '#experience' },
    { label: 'navbar.projects', japaneseLabel: '作', href: '#projects' },
    { label: 'navbar.contact', japaneseLabel: '連', href: '#contact' },
  ]  

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  manageDrawer() {
    this.isOpen = !this.isOpen
  }
}
