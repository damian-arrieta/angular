import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError,map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../services/alumno.service';
import * as AlumnosActions from './alumnos.actions';


@Injectable()
export class AlumnosEffects {

  cargarAlumnoss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.cargarAlumnos),
      concatMap(() => this.alumnoService.obtenerAlumnos().pipe(
        map((a: Alumno[]) => AlumnosActions.cargarAlumnosSuccess({alumnos: a}))
      ))
    );
  });

  agregarAlumnos$ = createEffect(() => {  
    return this.actions$.pipe(
    ofType(AlumnosActions.agregarAlumno),
    concatMap(({alumno}) => this.alumnoService.agregarAlumno(alumno).pipe (
        map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  editarAlumnos$ = createEffect(() => {  
    return this.actions$.pipe(
    ofType(AlumnosActions.editarAlumno),
    concatMap(({alumno}) => this.alumnoService.editarAlumno(alumno).pipe (
          map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  eliminarAlumnos$ = createEffect(() => {  
    return this.actions$.pipe(
    ofType(AlumnosActions.eliminarAlumno),
    concatMap(({alumno}) => this.alumnoService.eliminarAlumno(alumno).pipe (
        map(( a: Alumno )  => AlumnosActions.cargarAlumnos())
  ))
  );
  });


  constructor(
    private actions$: Actions,
    private alumnoService: AlumnoService) {}
}
