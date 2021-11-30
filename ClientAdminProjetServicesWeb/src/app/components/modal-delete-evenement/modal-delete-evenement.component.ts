import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evenement } from 'src/app/entities/Evenement';
import { DeleteKey } from 'src/app/entities/deleteKey';
@Component({
  selector: 'app-modal-delete-evenement',
  templateUrl: './modal-delete-evenement.component.html',
  styleUrls: ['./modal-delete-evenement.component.css']
})
export class ModalDeleteEvenementComponent implements OnInit {

  @Input() evenement!: Evenement

  deleteUtilisateurForm = new FormGroup({
    idEvenement: new FormControl('', Validators.required),
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
      id: this.evenement.idEvenement,
      key: this.deleteUtilisateurForm.value.key
    }
    this.activeModal.close(deleteKey);
  }

}
