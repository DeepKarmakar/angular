import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { isError, log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: '';
  public password: '';
  public isError = false;
  public message = '';

  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => {
      this.isError = true;
      this.message = err.message;
      console.log(err);
      
    });
  }
  loginWithGoogle(): void {
    this.authService.loginWithGoogle()
    .then((res) => {
      this.onLoginRedirect();
      console.log(res);
      
    }).catch(err => console.log('error', err));    
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook()
    .then((res) => {
      this.onLoginRedirect();
      console.log(res);
      
    }).catch(err => console.log('error', err));    
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  onLoginRedirect(): void{
    this.router.navigate(['profile']);
  }

}
