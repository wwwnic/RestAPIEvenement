import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-update-utilisateur',
  templateUrl: './modal-update-utilisateur.component.html',
  styleUrls: ['./modal-update-utilisateur.component.css']
})
export class ModalUpdateUtilisateurComponent implements OnInit {

  @Input() user!: Utilisateur;

  updateUtilisateurForm = new FormGroup({
    idUtilisateur: new FormControl('', Validators.required),
    nomUtilisateur: new FormControl('', Validators.required),
    motDePasse: new FormControl('', Validators.required),
    courriel: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    dateCreation: new FormControl('', Validators.required)
  })

  constructor(private activeModal: NgbActiveModal) {
  }

  closeUpdateModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    // console.log(this.user);
  }

  onUpdate() {
    const user: Utilisateur = {
      idUtilisateur: this.user.idUtilisateur,
      nomUtilisateur: this.updateUtilisateurForm.value.nomUtilisateur,
      motDePasse: this.user.motDePasse,
      courriel: this.updateUtilisateurForm.value.courriel,
      telephone: this.updateUtilisateurForm.value.telephone,
      dateCreation: this.user.dateCreation
    }
    this.activeModal.close(user);
  }

}
