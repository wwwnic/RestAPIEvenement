import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../entities/Utilisateur'
import { ApiClientService } from '../api-client.service'

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {

  utilisateurs
  message : string = "Chargement..."

  constructor(private apiService : ApiClientService) { }

  ngOnInit(): void {
    this.apiService.getEvenements().subscribe((response) => {
        this.utilisateurs = response;
        this.message = ""
    },(error) => { this.message = "Erreur de connexion"})
  }

}
