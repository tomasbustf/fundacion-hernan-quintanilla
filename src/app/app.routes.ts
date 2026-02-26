import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HernanQuintanillaComponent } from './hernan-quintanilla/hernan-quintanilla.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ColaboraFhqComponent } from './colabora-fhq/colabora-fhq.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FundacionHernanQuintanillaComponent } from './fundacion-hernan-quintanilla/fundacion-hernan-quintanilla.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { DirectorioComponent } from './directorio/directorio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'fundacion-hernan-quintanilla', component: FundacionHernanQuintanillaComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'directorio', component: DirectorioComponent },
  { path: 'hernan-quintanilla', component: HernanQuintanillaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'colabora-fhq', component: ColaboraFhqComponent },
  { path: 'contacto', component: ContactoComponent },
];
