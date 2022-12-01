import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AdminGuard } from '../core/guards/admin.guard';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';

const routes: Routes = [
  { path: '', component: AlumnosInicioComponent, canActivate: [AutenticacionGuard] ,children: [
    { path: 'lista-alumnos', component: ListaAlumnosComponent },
    { path: 'editar', component: EditarAlumnoComponent, canActivate: [AdminGuard] },
    { path:'agregar', component: AgregarAlumnoComponent, canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
