import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Partie-Client/acceuil/acceuil.component';
import { MenuComponent } from './Partie-Client/menu/menu.component';
import { BasDePageComponent } from './Partie-Client/bas-de-page/bas-de-page.component';
import { SidentifierComponent } from './Partie-Client/sidentifier/sidentifier.component';
import { SinscrireComponent } from './Partie-Client/sinscrire/sinscrire.component';
import { AproposComponent } from './Partie-Client/apropos/apropos.component';
import { ListDesThemeComponent } from './Partie-Client/list-des-theme/list-des-theme.component';
import { ConsultationComponent } from './Partie-Client/consultation/consultation.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
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
