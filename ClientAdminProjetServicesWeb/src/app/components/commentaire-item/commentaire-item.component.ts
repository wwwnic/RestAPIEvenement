import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from 'src/app/entities/Commentaire';
import { ModalDeleteCommentaireComponent } from '../modal-delete-commentaire/modal-delete-commentaire.component';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { DeleteKey } from 'src/app/entities/deleteKey';

@Component({
  selector: 'app-commentaire-item',
  templateUrl: './commentaire-item.component.html',
  styleUrls: ['./commentaire-item.component.css']
})
export class CommentaireItemComponent implements OnInit {

  @Input() commentaire!: Commentaire;
  @Output() commentaireDelete: EventEmitter<DeleteKey> = new EventEmitter();

  constructor(private modalService: NgbModal, private commentaireService: CommentaireService) { }

  ngOnInit(): void {
  }

  openDeleteModal(commentaire: Commentaire) {
    const modalRef = this.modalService.open(ModalDeleteCommentaireComponent);
    modalRef.componentInstance.commentaire = commentaire;
    modalRef.result.then((result) => {
      this.commentaireDelete.emit(result);
    });
  }

}
