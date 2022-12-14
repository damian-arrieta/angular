import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AutenticacionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CursosModule,
    CoreModule,
    SharedModule,
    AlumnosModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
