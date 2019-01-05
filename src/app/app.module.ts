import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbookPipe } from './searchbook.pipe';
import { LoginComponent } from './component/user/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ProfileComponent } from './component/user/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/user/register/register.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { AddBookModalComponent } from './component/add-book-modal/add-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbookPipe,
    LoginComponent,
    ProfileComponent,
    Page404Component,
    NavbarComponent,
    RegisterComponent,
    BookDetailsComponent,
    BookListComponent,
    AddBookModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
