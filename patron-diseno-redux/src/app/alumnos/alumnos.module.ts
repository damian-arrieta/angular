import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoService } from './services/alumno.service';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from '../alumnos.effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule,
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
