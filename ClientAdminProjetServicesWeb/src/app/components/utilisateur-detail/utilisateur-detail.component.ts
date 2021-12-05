import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { Evenement } from 'src/app/entities/Evenement';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { EvenementService } from 'src/app/services/evenement.service';
import { DeleteKey } from 'src/app/entities/deleteKey';

@Component({
  selector: 'app-utilisateur-detail',
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.css']
})
export class UtilisateurDetailComponent implements OnInit {
  id!: number;
  user!: Utilisateur;
  evenements!: Evenement[];
  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService, private evenementService: EvenementService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>
      this.id = data['id']
    );
    this.utilisateurService.getUtilisateurById(this.id).subscribe((user) => this.user = user);
    console.log(this.user);
    this.evenementService.getAllEvenementsByOrganisateurId(this.id).subscribe((events) => this.evenements = events);
    console.log(this.evenements);
  }
  updateUtilisateur(user: Utilisateur) {
    this.utilisateurService.updateUser(user).subscribe();
  }

  deleteUtilisateur(dk: DeleteKey) {
    // console.log(this.utilisateurs.filter(u => u.idUtilisateur === dk.id));
    // this.utilisateurService.deleteUser(dk).subscribe(() => this.utilisateurs = this.utilisateurs.filter(u => u.idUtilisateur !== dk.id));
    this.utilisateurService.deleteUser(dk).subscribe();
    this.router.navigate([`/utilisateur`]);
  }

  updateEvenement(evenement: Evenement) {
    this.evenementService.updateEvenement(evenement).subscribe();
  }

  deleteEvenement(deleteKey: DeleteKey) {
    this.evenementService.deleteEvenement(deleteKey).subscribe(() => this.evenements = this.evenements.filter(e => e.idEvenement !== deleteKey.id));
  }
}
