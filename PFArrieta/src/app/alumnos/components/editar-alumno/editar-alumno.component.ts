import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoState } from 'src/app/models/alumno.state';
import { editarAlumno } from '../../state/alumnos.actions';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  id!: number;
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alumnoState: Store<AlumnoState>,
    private router: Router
  ) {
    this.formulario = formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      username: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.id = parseInt(parametros.get('id') || '0');
      
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
        email: new FormControl(parametros.get('email'), [Validators.required]),
        username: new FormControl(parametros.get('username'), [Validators.required]),
      });
    })
  }

  editarAlumno(){
    let alumno: Alumno = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      username: this.formulario.value.username
    }
    this.alumnoState.dispatch(editarAlumno({alumno}));
    this.router.navigate(['/alumnos/lista-alumnos'])
  }
}
