import { ActionReducerMap } from "@ngrx/store";
import { AlumnoState } from "../models/alumno.state";
import { alumnosreducer } from "../alumnos/state/alumnos.reducer";

export interface AppState{
    alumnos: AlumnoState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    alumnos: alumnosReducer
}