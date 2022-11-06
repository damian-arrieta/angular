import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let httpClienSpy: { get: jasmine.Spy };
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ AgregarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
