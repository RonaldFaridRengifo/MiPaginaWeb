import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooderComponent } from "../fooder/fooder.component";

@Component({
  selector: 'app-proyectos',
  imports: [HeaderComponent, FooderComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
