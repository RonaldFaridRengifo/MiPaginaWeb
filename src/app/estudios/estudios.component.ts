import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooderComponent } from "../fooder/fooder.component";

@Component({
  selector: 'app-estudios',
  imports: [HeaderComponent, FooderComponent],
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent {

}
