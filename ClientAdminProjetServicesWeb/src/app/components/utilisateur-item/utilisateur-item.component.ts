import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { DeleteKey } from 'src/app/entities/deleteKey';
import { ModalUpdateUtilisateurComponent } from '../modal-update-utilisateur/modal-update-utilisateur.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteUtilisateurComponent } from '../modal-delete-utilisateur/modal-delete-utilisateur.component';
import { empty } from 'rxjs';

@Component({
  selector: 'app-utilisateur-item',
  templateUrl: './utilisateur-item.component.html',
  styleUrls: ['./utilisateur-item.component.css']
})
export class UtilisateurItemComponent implements OnInit {
  @Output() update: EventEmitter<Utilisateur> = new EventEmitter();
  @Output() delete: EventEmitter<DeleteKey> = new EventEmitter();
  @Input() utilisateur!: Utilisateur;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  openUpdateModal(user: Utilisateur) {
    const modalRef = this.modalService.open(ModalUpdateUtilisateurComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      this.utilisateur.nomUtilisateur = result.nomUtilisateur;
      this.utilisateur.courriel = result.courriel;
      this.utilisateur.telephone = result.telephone;
      this.update.emit(result);
    });
  }

  openDeleteModal(user: Utilisateur) {
    const modalRef = this.modalService.open(ModalDeleteUtilisateurComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      this.delete.emit(result);
    });
  }

  visit(user: Utilisateur): void {
    this.router.navigate([`/utilisateur/${user.idUtilisateur}`]);
  }


}
