import { createAction, props } from "@ngrx/store";
import { Alumno } from "src/app/models/alumno";

export const cargarAlumnos = createAction(
    '[Lista Alumnos] Cargar alumnos'
    )

export const alumnosCargados = createAction(
        '[Lista Alumnos] Alumnos cargados',
        props<{ alumnos: Alumno[] }> ()
        )