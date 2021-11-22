import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string
  password : string

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.userName == "admin" && this.password == "admin") {
      this._router.navigateByUrl('/administration');
    } else {
      var message = document.getElementById("txtErreur");
      message.innerHTML = "Erreur de connexion"
    }
  }
}
