import { Component, Input } from '@angular/core';

interface NavItem {
  text: string,
  status: string
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() brand = 'Navbar';
  @Input() items: NavItem[] = []
}
