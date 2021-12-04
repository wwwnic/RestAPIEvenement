import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Commentaire } from 'src/app/entities/Commentaire';
import { Evenement } from 'src/app/entities/Evenement';
import { ModalDeleteCommentaireComponent } from '../modal-delete-commentaire/modal-delete-commentaire.component';
import { EvenementService } from 'src/app/services/evenement.service';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  id!: number;
  evenement!: Evenement;
  commentaires!: Commentaire[];

  constructor(private route: ActivatedRoute, private evenementService: EvenementService, private commentaireService: CommentaireService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => this.id = data['id']);
    console.log(`Located here 1`);
    this.evenementService.getEvenementById(this.id).subscribe((evenement) => this.evenement = evenement);
    this.commentaireService.getAllByEvenementId(this.id).subscribe((commentaires) => this.commentaires = commentaires);
  }

  openDeleteModal(commentaire: Commentaire) {
    const modalRef = this.modalService.open(ModalDeleteCommentaireComponent);
    modalRef.componentInstance.commentaire = commentaire;
    modalRef.result.then((result) => {
      this.commentaireService.deleteUser(result).subscribe(() => this.commentaires = this.commentaires.filter(c => c.idCommentaire !== result.id))
    });
  }

}
