import { createReducer, on } from "@ngrx/store";
import { AlumnoState } from "src/app/models/alumno.state";
import { cargarAlumnos, alumnosCargados } from "../actions/alumno.action";

const estadoInicial: AlumnoState = {
    cargando: false,
    alumnos: []
}

export const alumnosReducer = createReducer(
    estadoInicial,
    on(cargarAlumnos, (estado) => {
        const estadoNuevo: AlumnoState = {
            cargando: true,
            alumnos: estado.alumnos
        }
        return estadoNuevo
    }),
    on(alumnosCargados, (estado, { alumnos }) =>{
        const estadoNuevo: AlumnoState = {
            cargando: false,
            alumnos: alumnos
        }
        return estadoNuevo
    })
)