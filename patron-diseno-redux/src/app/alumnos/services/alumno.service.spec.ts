import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AlumnoService } from './alumno.service';

describe('AlumnoService', () => {
  let httpClienSpy: { get: jasmine.Spy };
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClienSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnoService(httpClienSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un array de alumnos mockeados', (done: DoneFn) => {
    const mockDatos = [
      {"nombre":"Consuelo","apellido":"Rolfson","email":"Diamond41@gmail.com","username":"Emory.Wilkinson","id":2},
      {"nombre":"Adolfo","apellido":"Beahan","email":"Carmen_Wolf75@hotmail.com","username":"Sonya.Dietrich","id":5},
      {"nombre":"Augusta","apellido":"Hackett","email":"Armani_Murphy41@gmail.com","username":"Wilma.Ritchie","id":7},
      {"nombre":"Augusta","apellido":"Steuber","email":"Major.Dibbert@hotmail.com","username":"Jordy_Lubowitz52","id":8},
      {"nombre":"Carli","apellido":"Halvorson","email":"Jovanny50@hotmail.com","username":"Tom93","id":9},
      {"nombre":"Reina","apellido":"Renner","email":"Jimmie_Mertz@yahoo.com","username":"Chad37","id":10},{"nombre":"Zoey","apellido":"Predovic","email":"Immanuel82@yahoo.com","username":"Gilbert.Kunde40","id":11},
      {"nombre":"Price","apellido":"Price","email":"Heather_Harvey22@hotmail.com","username":"Dorothy70","id":12},
      {"nombre":"Jordon","apellido":"Lueilwitz","email":"Danielle90@yahoo.com","username":"Sylvan88","id":13},
      {"nombre":"Savannah","apellido":"Sawayn","email":"Alisha34@yahoo.com","username":"Jettie.Goldner88","id":14},{"nombre":"Emiliano","apellido":"Mann","email":"Neal_Barrows@hotmail.com","username":"Jeremie.Mayert","id":15},
      {"nombre":"Maegan","apellido":"Block","email":"Edmund85@yahoo.com","username":"Twila.Senger27","id":16},
      {"nombre":"Pedro","apellido":"Tremblay","email":"Darby25@yahoo.com","username":"Macie43","id":17},
      {"nombre":"Meta","apellido":"Krajcik","email":"Buford89@gmail.com","username":"Reyes58","id":18},
      {"nombre":"Judah","apellido":"Erdman","email":"Frieda10@hotmail.com","username":"Dax_Walter","id":19},
      {"nombre":"Johann","apellido":"Adams","email":"Anabel14@hotmail.com","username":"Theresia_Upton","id":20},
      {"nombre":"Kiarra","apellido":"Kutch","email":"Susie.Greenfelder75@gmail.com","username":"Lyla_McDermott","id":21},
      {"nombre":"Hertha","apellido":"Barton","email":"Kaitlin_Cremin@yahoo.com","username":"Melyssa_Bauch","id": 22}
    ];

    httpClienSpy.get.and.returnValue(of(mockDatos));
    service.obtenerAlumnos().subscribe((alumnos) => {
      expect(alumnos).toEqual(mockDatos);
      done();
    })
   
  })

});
