import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { BookInterface } from '../../models/book-interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { log } from 'util';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {

  constructor( public dataApi: DataApiService, private storage: AngularFireStorage ) {

  }

  @ViewChild('imgurl') inputImageUser: ElementRef;
  imgUrl: Observable<string>;
  filterName: any;
  ngOnInit() {
    // this.onSaveBook();
  }

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `upload/book_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => {
      this.imgUrl = ref.getDownloadURL();
    }));
  }
  onSaveBook(formBook: NgForm): void {
    this.dataApi.addBook(formBook.value);
    this.dataApi.selectedBooks = {
      id: null,
      name: '',
      category: '',
      unit: '',
      condition: '',
      imgUrl: '',
      description: '',
      link: ''
    };
  }
}
