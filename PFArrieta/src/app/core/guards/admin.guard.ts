import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor (
    private sesion: SesionService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
        if(sesion.usuarioActivo?.admin){
          return true
        } else {
          alert("No tiene permisos para acceder a este sitio");
          this.router.navigate(['inicio']);
          return false
        }
      })
      );
    }
}
