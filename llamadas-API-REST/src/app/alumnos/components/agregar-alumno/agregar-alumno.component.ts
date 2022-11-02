import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl(),
      username: new FormControl()
    });
  }

  agregarAlumno(){
    const alumno: Alumno = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      username: this.formulario.value.username
    };
    this.alumnoService.agregarAlumno();
    this.router.navigate(['alumnos', 'listar']);
  }

  ngOnInit(): void {
  }

}
