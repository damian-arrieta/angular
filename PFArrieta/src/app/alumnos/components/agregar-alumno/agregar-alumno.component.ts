import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { agregarAlumno } from '../../state/alumnos.actions';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private alumnoState: Store<AlumnoState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.formulario = formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      username: new FormControl('', [Validators.required])
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
    this.alumnoState.dispatch(agregarAlumno({alumno}));
    this.router.navigate(['/alumnos/lista-alumnos']);
  }

  ngOnInit(): void {
  }

}
