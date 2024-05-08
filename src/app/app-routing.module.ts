import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { BasDePageComponent } from './Pages/bas-de-page/bas-de-page.component';
import { SidentifierComponent } from './Pages/sidentifier/sidentifier.component';
import { SinscrireComponent } from './Pages/sinscrire/sinscrire.component';
import { AproposComponent } from './Pages/apropos/apropos.component';
import { ListDesThemeComponent } from './Pages/list-des-theme/list-des-theme.component';
import { ConsultationComponent } from './Pages/consultation/consultation.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'sidentifier', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'bas-de-page', component: BasDePageComponent },
  { path: 'sidentifier', component: SidentifierComponent },
  { path: 'sinscrire', component: SinscrireComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'list-des-theme', component: ListDesThemeComponent },
  { path: 'consultation', component: ConsultationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
