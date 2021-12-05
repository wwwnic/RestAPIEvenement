import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/entities/Commentaire';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeleteKey } from 'src/app/entities/deleteKey';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-delete-commentaire',
  templateUrl: './modal-delete-commentaire.component.html',
  styleUrls: ['./modal-delete-commentaire.component.css']
})
export class ModalDeleteCommentaireComponent implements OnInit {

  @Input() commentaire!: Commentaire;
  deleteCommentaireForm = new FormGroup({
    idCommentaire: new FormControl('', Validators.required),
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
      id: this.commentaire.idCommentaire,
      key: this.deleteCommentaireForm.value.key
    }
    this.activeModal.close(deleteKey);
  }

}
