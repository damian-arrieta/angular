import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formulario!: FormGroup;
  alumno!: Alumno;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.alumno = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        email: parametros.get('email') || '',
        username: parametros.get('username') || '',
      }
      
      this.formulario = new FormGroup({
        nombre: new FormControl(this.alumno.nombre),
        apellido: new FormControl(this.alumno.apellido),
        email: new FormControl(this.alumno.email),
        username: new FormControl(this.alumno.username)
      });
    })
  }

  editarAlumno(){
    let c: Alumno = {
      id: this.alumno.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      username: this.formulario.value.username
    }
    this.alumnoService.editarAlumno(c);
    this.router.navigate(['alumnos/listar']);
  }
}
