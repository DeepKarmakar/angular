import { Component, OnInit, ElementRef, ViewChild, Pipe } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private storage: AngularFireStorage) { }
  @ViewChild('imageUser') inputImageUser: ElementRef;
  public msgError = '';
  public email = '';
  public password = '';
  public isError = false;

  urlImage: Observable<string>;

  ngOnInit() {
  }

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `upload/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  onRegister(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if(user){
          console.log('actul', user);
          user.updateProfile({
            displayName: '',
            photoURL: this.inputImageUser.nativeElement.value,
          }).then( function(){
            console.log("user update");
          }).catch(function(error){
            console.log('error', error);
          })
        }
      })
      // this.router.navigate(['dashboard']);
    }).catch(err => {
      console.log('err', err.message);
      this.isError = true;
      this.msgError = err.message;
    });
  }

}
