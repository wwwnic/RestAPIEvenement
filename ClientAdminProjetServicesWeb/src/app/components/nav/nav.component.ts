import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { Utilisateur } from 'src/app/utilisateur';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() logoutClick = new EventEmitter();
  constructor() {
  }

  get() {
    return sessionStorage.getItem('utilisateur');
  }

  ngOnInit(): void {
  }


  logout() {
    this.logoutClick.emit();
  }
}
