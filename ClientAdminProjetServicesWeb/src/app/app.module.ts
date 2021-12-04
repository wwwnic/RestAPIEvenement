import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UtilisateurItemComponent } from './components/utilisateur-item/utilisateur-item.component';
import { EvenementItemComponent } from './components/evenement-item/evenement-item.component';
import { ModalDeleteUtilisateurComponent } from './components/modal-delete-utilisateur/modal-delete-utilisateur.component';
import { ModalDeleteEvenementComponent } from './components/modal-delete-evenement/modal-delete-evenement.component';
import { ModalUpdateUtilisateurComponent } from './components/modal-update-utilisateur/modal-update-utilisateur.component';
import { ModalUpdateEvenementComponent } from './components/modal-update-evenement/modal-update-evenement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarUtilisateurComponent } from './components/search-bar-utilisateur/search-bar-utilisateur.component';
import { SearchBarEvenementComponent } from './components/search-bar-evenement/search-bar-evenement.component';
import { UtilisateurDetailComponent } from './components/utilisateur-detail/utilisateur-detail.component';
import { EvenementDetailComponent } from './components/evenement-detail/evenement-detail.component';
import { CommentaireItemComponent } from './components/commentaire-item/commentaire-item.component';
import { ModalDeleteCommentaireComponent } from './components/modal-delete-commentaire/modal-delete-commentaire.component';
import { UtilisateurItemDetailComponent } from './componenets/utilisateur-item-detail/utilisateur-item-detail.component';
import { EvenementItemDetailComponent } from './components/evenement-item-detail/evenement-item-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ButtonComponent,
    LoginFormComponent,
    UtilisateurItemComponent,
    routingComponents,
    EvenementItemComponent,
    ModalDeleteUtilisateurComponent,
    ModalDeleteEvenementComponent,
    ModalUpdateUtilisateurComponent,
    ModalUpdateEvenementComponent,
    SearchBarUtilisateurComponent,
    SearchBarEvenementComponent,
    UtilisateurDetailComponent,
    EvenementDetailComponent,
    CommentaireItemComponent,
    ModalDeleteCommentaireComponent,
    UtilisateurItemDetailComponent,
    EvenementItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUpdateUtilisateurComponent, ModalDeleteUtilisateurComponent,
    ModalUpdateEvenementComponent, ModalDeleteEvenementComponent
  ]
})
export class AppModule { }
