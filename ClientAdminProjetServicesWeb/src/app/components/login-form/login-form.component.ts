import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginInfo } from 'src/app/entities/loginInfo';
import { Utilisateur } from 'src/app/entities/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  utilisateur!: Utilisateur;
  @Output() userInfo = new EventEmitter<Utilisateur>();
  erreurMessage: string = "";

  loginForm = new FormGroup({
    nomUtilisateur: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    // this.utilisateurService.doLogin(this.loginForm).subscribe();
  }

  getNomUtilisateur() { return this.loginForm.get('nomUtilisateur'); }

  getPassword() { return this.loginForm.get('password'); }

  onLogin(): void {
    if (this.getNomUtilisateur()?.invalid || this.getPassword()?.invalid) {
      this.erreurMessage = ("Fill in the missing fields");
      return;
    } else {
      this.erreurMessage = "";
      const loginInfo: LoginInfo = {
        nomUtilisateur: this.loginForm.value.nomUtilisateur,
        password: this.loginForm.value.password
      }
      this.utilisateurService.doLogin(loginInfo).subscribe((user) => {
        if (user.idUtilisateur != 1) {
          this.erreurMessage = ("Please Login as Admin");
        } else if (user.idUtilisateur == 1) {
          this.userInfo.emit(user);
        }
      });
    }
  }
}
