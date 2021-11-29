import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/utilisateur';
import { DeleteKey } from 'src/app/deleteKey';

@Component({
  selector: 'app-modal-delete-utilisateur',
  templateUrl: './modal-delete-utilisateur.component.html',
  styleUrls: ['./modal-delete-utilisateur.component.css']
})
export class ModalDeleteUtilisateurComponent implements OnInit {

  @Input() user!: Utilisateur;

  deleteUtilisateurForm = new FormGroup({
    idUtilisateur: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required)
  })


  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeDeleteModal() {
    this.activeModal.close();
  }

  onDelete() {
    const deleteKey: DeleteKey = {
      id: this.user.idUtilisateur,
      key: this.deleteUtilisateurForm.value.key
    }
    this.activeModal.close(deleteKey);
  }

}
