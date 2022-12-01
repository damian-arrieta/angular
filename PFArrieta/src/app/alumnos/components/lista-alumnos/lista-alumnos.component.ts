import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { Usuario } from 'src/app/models/usuario';
import { selectAlumnosState } from '../../state/alumnos.selectors';
import { AlumnosDialogComponent } from '../alumnos-dialog/alumnos-dialog.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;
  admin: boolean = false;
  columns: string [] = ['id', 'nombre', 'apellido', 'email', 'username', 'acciones']

  constructor(
    private alumnoState: Store<AlumnoState>,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.alumnos$ = this.alumnoState.select(selectAlumnosState)
   }

  ngOnInit(): void {
    this.alumnoState.select(selectUsuarioActivoState).subscribe({
      next: (usuario: Usuario | undefined) => {
        if(usuario?.admin) {
          this.admin = true;
        }
        else {
          this.admin = false;
        }
      }
    })
  }

  eliminarAlumno(alumno: Alumno){
    this.dialog.open(AlumnosDialogComponent, {
      width: '300px',
      data: alumno
    })
  }

  editarAlumno(alumno: Alumno){
    this.router.navigate(['alumnos/editar', alumno]);
  }

}
