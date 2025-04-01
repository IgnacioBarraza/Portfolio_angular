import { Component, OnChanges, SimpleChanges } from '@angular/core'
import { NavItem } from "../../utils/interfaces";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {

  scrolled: boolean = false
  isOpen: boolean = false

  navItems: NavItem[] = [
    { label: "About", japaneseLabel: "私", href: "#about" },
    { label: "Skills", japaneseLabel: "技", href: "#skills" },
    { label: "Experience", japaneseLabel: "経", href: "#experience" },
    { label: "Projects", japaneseLabel: "作", href: "#projects" },
    { label: "Contact", japaneseLabel: "連", href: "#contact" },
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (window.scrollY > 50) {
      this.scrolled = true
      console.log('first', this.scrolled)
    } else {
      this.scrolled = false
      console.log('second', this.scrolled)
    }
  }

  manageDrawer() {
    this.isOpen = !this.isOpen
  }
}
