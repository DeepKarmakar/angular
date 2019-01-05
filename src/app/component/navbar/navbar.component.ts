import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService, private afsAuth: AngularFireAuth ) { }

  public app_name = 'Library';
  public isLogged = true;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('logged');
        this.isLogged = true;
      } else {
        console.log("not logged");
        this.isLogged = false;
      }
    })
  }

  onLogOut(){
    this.afsAuth.auth.signOut();
  }

}
