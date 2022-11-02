import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  eliminarAlumno(id: number){
    this.alumnoService.eliminarAlumno(id);
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  editarAlumno(alumno: Alumno){
    this.router.navigate(['alumnos/editar', {
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      email: alumno.email,
      username: alumno.username
    }]);
  }

}
