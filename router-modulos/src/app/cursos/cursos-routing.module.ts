import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';

const routes: Routes = [
  { path: 'cursos', children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent },
    { path:'agregar', component: AgregarCursoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
