import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from "./componentes/login/LoginComponent";
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'banner', component: BannerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sobremi', component: SobremiComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'pagina404', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
