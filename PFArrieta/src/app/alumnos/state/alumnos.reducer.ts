import { Action, createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';
import { AlumnoState } from 'src/app/models/alumno.state';

export const alumnosFeatureKey = 'alumnos';

export interface State {

}

export const initialState: AlumnoState = {
  cargando: false,
  alumnos: []

};

export const reducer = createReducer(
  initialState,

  on(AlumnosActions.cargarAlumnos, (state) => {
    return {...state, cargando: true}
  }),
  on(AlumnosActions.cargarAlumnosSuccess, (state, {alumnos}) => {
    return {...state, cargando: false, alumnos}
  }),
  on(AlumnosActions.cargarAlumnosFailure, (state, {error}) => {
    return state
  }),

);
