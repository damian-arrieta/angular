import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private cursoService: CursoService,
    private router: Router 
    ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      inscripcionAbierta: new FormControl()
    });
   }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['cursos', 'listar']);
  }

  ngOnInit(): void {
  }

}
