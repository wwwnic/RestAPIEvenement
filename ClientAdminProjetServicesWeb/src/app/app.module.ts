import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionEvenementsComponent } from './gestion-evenements/gestion-evenements.component';
import { GestionCommentairesComponent } from './gestion-commentaires/gestion-commentaires.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrationComponent,
    GestionUtilisateursComponent,
    GestionEvenementsComponent,
    GestionCommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GestionUtilisateursComponent,
    GestionEvenementsComponent,
    GestionCommentairesComponent]
})
export class AppModule { }
