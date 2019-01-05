import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user = {
    displayName : '',
    email : '',
    phoneNumber : '',
    photoURL : '',
    providerId : '',
    uid : '',
  };

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if ( user ) {
        let providerData = user.providerData[0];
        this.user.displayName = providerData.displayName;
        this.user.email = providerData.email;
        this.user.photoURL = providerData.photoURL;
        this.user.providerId = providerData.providerId;
      }
    });
  }

}
