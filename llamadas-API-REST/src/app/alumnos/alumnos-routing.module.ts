import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  { path: '', children: [
    { path: 'listar', component: ListaAlumnosComponent },
    { path: 'editar', component: EditarAlumnoComponent },
    { path:'agregar', component: AgregarAlumnoComponent, canActivate: [AutenticacionGuard, AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
