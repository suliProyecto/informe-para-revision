import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LoginModalComponent } from './modales/login-modal/login-modal.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { HabilidadesModalComponent } from './modales/habilidades-modal/habilidades-modal.component';
import { IndexComponent } from './componentes/index/index.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SobremiComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
    Pagina404Component,
    LoginModalComponent,
    EducacionModalComponent,
    ExperienciaModalComponent,
    HabilidadesModalComponent,
    IndexComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
