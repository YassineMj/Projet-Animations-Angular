import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { BasDePageComponent } from './Pages/bas-de-page/bas-de-page.component';
import { SidentifierComponent } from './Pages/sidentifier/sidentifier.component';
import { SinscrireComponent } from './Pages/sinscrire/sinscrire.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import { AproposComponent } from './Pages/apropos/apropos.component';
import { ListDesThemeComponent } from './Pages/list-des-theme/list-des-theme.component';
import { ConsultationComponent } from './Pages/consultation/consultation.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


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
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
