import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  


}
