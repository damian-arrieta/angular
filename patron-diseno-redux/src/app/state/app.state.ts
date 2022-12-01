import { ActionReducerMap } from "@ngrx/store";
import { AlumnoState } from "../models/alumno.state";
import { alumnosReducer } from "./reducers/alumno.reducer";

export interface AppState{
    alumnos: AlumnoState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    alumnos: alumnosReducer
}