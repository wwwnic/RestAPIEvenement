import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Commentaire } from 'src/app/entities/Commentaire';
import { Evenement } from 'src/app/entities/Evenement';
import { EvenementService } from 'src/app/services/evenement.service';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { DeleteKey } from 'src/app/entities/deleteKey';

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  id!: number;
  evenement!: Evenement;
  commentaires!: Commentaire[];

  constructor(private route: ActivatedRoute, private evenementService: EvenementService, private commentaireService: CommentaireService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => this.id = data['id']);
    console.log(`Located here 1`);
    this.evenementService.getEvenementById(this.id).subscribe((evenement) => this.evenement = evenement);
    this.commentaireService.getAllByEvenementId(this.id).subscribe((commentaires) => this.commentaires = commentaires);
  }

  updateEvenement(evenement: Evenement) {
    this.evenementService.updateEvenement(evenement).subscribe();
  }

  deleteEvenement(deleteKey: DeleteKey) {
    this.evenementService.deleteEvenement(deleteKey).subscribe();
    this.router.navigate([`/evenement`]);
  }

  deleteCommentaire(deleteKey: DeleteKey) {
    this.commentaireService.deleteCommentaire(deleteKey).subscribe(() => this.commentaires = this.commentaires.filter((c) => c.idCommentaire !== deleteKey.id));
  }

}
