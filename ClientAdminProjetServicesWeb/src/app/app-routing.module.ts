import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './components/evenement/evenement.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { LoginComponent } from './components/login/login.component';
import { UtilisateurDetailComponent } from './components/utilisateur-detail/utilisateur-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'utilisateur/:id', component: UtilisateurDetailComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, UtilisateurComponent, EvenementComponent, PageNotFoundComponent]
