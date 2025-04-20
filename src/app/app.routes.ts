import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
  { path: 'inicio', component: PrincipalComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

