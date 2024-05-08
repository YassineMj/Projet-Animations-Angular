import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './Partie-Client/menu/menu.component';
import { BasDePageComponent } from './Partie-Client/bas-de-page/bas-de-page.component';
import { SidentifierComponent } from './Partie-Client/sidentifier/sidentifier.component';
import { SinscrireComponent } from './Partie-Client/sinscrire/sinscrire.component';
import { AcceuilComponent } from './Partie-Client/acceuil/acceuil.component';
import { AproposComponent } from './Partie-Client/apropos/apropos.component';
import { ListDesThemeComponent } from './Partie-Client/list-des-theme/list-des-theme.component';
import { ConsultationComponent } from './Partie-Client/consultation/consultation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BasDePageComponent,
    SidentifierComponent,
    SinscrireComponent,
    AcceuilComponent,
    AproposComponent,
    ListDesThemeComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
