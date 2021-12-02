import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { Evenement } from 'src/app/entities/Evenement';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-utilisateur-detail',
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.css']
})
export class UtilisateurDetailComponent implements OnInit {
  id!: number;
  user!: Utilisateur;
  evenements!: Evenement[];
  constructor(private route: ActivatedRoute, private utilisateurSerivce: UtilisateurService, private evenementService: EvenementService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>
      this.id = data['id']
    );
    this.utilisateurSerivce.getUtilisateurById(this.id).subscribe((user) => this.user = user);
    console.log(this.user);
    this.evenementService.getAllEvenementsByOrganisateurId(this.id).subscribe((events) => this.evenements = events);
    console.log(this.evenements);
  }

}
