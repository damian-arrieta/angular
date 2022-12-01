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
import { AlumnosEffects } from './state/alumnos.effects';
import { StoreModule } from '@ngrx/store';
import { AlumnosDialogComponent } from './components/alumnos-dialog/alumnos-dialog.component';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { alumnosFeatureKey, reducer } from './state/alumnos.reducer';



@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent,
    AlumnosDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alumnosFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
