import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0')
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre')),
        comision: new FormControl(parametros.get('comision')),
        profesor: new FormControl(parametros.get('profesor')),
        fechaInicio: new FormControl(parametros.get('fechaInicio')),
        fechaFin: new FormControl(parametros.get('fechaFin')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta'))
      });
    })
  }

  editarCurso(){
    let c: Curso = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
    this.cursoService.editarCurso(c);
    this.router.navigate(['cursos/listar']);
  }

}
