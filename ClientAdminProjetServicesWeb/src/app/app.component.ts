import { Component, Input } from '@angular/core';
import { UtilisateurService } from './services/utilisateur.service';
import { Utilisateur } from './entities/utilisateur';
import { UtilisateurEvenement } from './entities/UtilisateurEvenement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdministateurUser';

  save(user: Utilisateur) {
    sessionStorage.setItem('utilisateur', JSON.stringify(user));
  }

  get() {
    return sessionStorage.getItem('utilisateur');
  }

  removeUtilisateur() {
    sessionStorage.removeItem('utilisateur');
  }

}
