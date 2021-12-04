import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Commentaire } from 'src/app/entities/Commentaire';

@Component({
  selector: 'app-commentaire-item',
  templateUrl: './commentaire-item.component.html',
  styleUrls: ['./commentaire-item.component.css']
})
export class CommentaireItemComponent implements OnInit {

  @Input() commentaire!: Commentaire;

  constructor() { }

  ngOnInit(): void {
  }

  openDeleteModal(commentaire: Commentaire): void { }

}
