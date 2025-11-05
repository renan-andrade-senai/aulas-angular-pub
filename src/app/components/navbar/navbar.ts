import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

interface NavItem {
  text: string,
  status: string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() brand = 'Navbar';
  @Input() items: NavItem[] = []
}
