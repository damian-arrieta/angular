import { TestBed } from '@angular/core/testing';
import { CursosModule } from '../cursos.module';
import { CursoService } from './curso.service';

describe('CursoService', () => {
  let service: CursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CursosModule ]
    });
    service = TestBed.inject(CursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
