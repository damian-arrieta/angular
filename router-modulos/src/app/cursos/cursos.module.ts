import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

import { CursosRoutingModule } from './cursos-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
