import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { label: "About", japaneseLabel: "私", href: "#about" },
    { label: "Skills", japaneseLabel: "技", href: "#skills" },
    { label: "Experience", japaneseLabel: "経", href: "#experience" },
    { label: "Projects", japaneseLabel: "作", href: "#projects" },
    { label: "Contact", japaneseLabel: "連", href: "#contact" },
  ]
}
