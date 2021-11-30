import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evenement } from 'src/app/entities/Evenement';

@Component({
  selector: 'app-modal-update-evenement',
  templateUrl: './modal-update-evenement.component.html',
  styleUrls: ['./modal-update-evenement.component.css']
})
export class ModalUpdateEvenementComponent implements OnInit {

  @Input() evenement!: Evenement;
  updateEvenementForm = new FormGroup({
    idEvenement: new FormControl('', Validators.required),
    nomEvenement: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    idOrganisateur: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeUpdateModal() {
    this.activeModal.close();
  }
  onUpdate() {
    const evenement: Evenement = {
      idEvenement: this.evenement.idEvenement,
      nomEvenement: this.updateEvenementForm.value.nomEvenement,
      location: this.updateEvenementForm.value.location,
      date: this.updateEvenementForm.value.date,
      idOrganisateur: this.evenement.idOrganisateur,
      description: this.updateEvenementForm.value.description
    }
    this.activeModal.close(evenement);
  }

}
