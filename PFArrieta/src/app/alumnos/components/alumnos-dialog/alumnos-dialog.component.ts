import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { eliminarAlumno } from '../../state/alumnos.actions';


@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrls: ['./alumnos-dialog.component.css']
})
export class AlumnosDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: Alumno,
  private dialogRef: MatDialogRef<AlumnosDialogComponent>,  
  private alumnoState: Store<AlumnoState>
  ) { }

  ngOnInit(): void {
  }

  confirmar(): void {
    this.alumnoState.dispatch(eliminarAlumno({alumno: this.data}));
    this.dialogRef.close(true);
  }

}
