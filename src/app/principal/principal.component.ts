import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooderComponent } from "../fooder/fooder.component";

@Component({
  selector: 'app-principal',
  imports: [HeaderComponent, FooderComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
