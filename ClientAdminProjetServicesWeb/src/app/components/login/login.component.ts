import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginInfo } from 'src/app/entities/loginInfo';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(user: Utilisateur) {
    sessionStorage.setItem('utilisateur', JSON.stringify(user));
    this.router.navigate(['utilisateur']);
  }

  get() {
    return sessionStorage.getItem('utilisateur');
  }

}
