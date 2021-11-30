import { Component, OnInit } from '@angular/core';
import { DeleteKey } from 'src/app/entities/deleteKey';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { SearchFormUtilisateur } from 'src/app/entities/SearchFormUtilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs!: Utilisateur[];
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getAllUtilisateur();
  }

  getAllUtilisateur() {
    this.utilisateurService.getAll().subscribe((users) => (this.utilisateurs = users));
  }
  consulterUtilisateur(user: Utilisateur) {
    console.log(user);
  }

  updateUtilisateur(user: Utilisateur) {
    this.utilisateurService.updateUser(user).subscribe();
  }

  deleteUtilisateur(dk: DeleteKey) {
    //UI NOT UPDATING AFTER DELETION OF USER
    this.utilisateurService.deleteUser(dk).subscribe(() => this.utilisateurs.filter(u => u.idUtilisateur !== dk.id));
  }

  filterUtilisateurs(sfm: SearchFormUtilisateur) {
    if (sfm.searchMethod == "getById") {
      const id = parseInt(sfm.searchValue);
      this.utilisateurService.getUtilisateurById(id).subscribe(() => this.utilisateurs.filter(u => u.idUtilisateur === id));
    }
    else if (sfm.searchMethod == "getByName") {
      this.utilisateurService.getAllUtuilisateursByName(sfm.searchValue).subscribe((users) => this.utilisateurs = users);
    }
    else if (sfm.searchMethod == "getAll") {
      this.getAllUtilisateur();
    }
  }

}
