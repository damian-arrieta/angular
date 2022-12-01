import { AlumnoState } from "src/app/models/alumno.state";
import { AppState } from "../app.state";
import { createSelector } from "@ngrx/store";

export const selectorAlumno = (state: AppState) => state.alumnos;

export const selectorCargandoAlumnos = createSelector(
    selectorAlumno,
    (state: AlumnoState) => state.cargando
)

export const selectorAlumnosCargados = createSelector(
    selectorAlumno,
    (state: AlumnoState) => state.alumnos
)