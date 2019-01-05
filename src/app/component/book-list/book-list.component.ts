import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book-interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor( private dataApi: DataApiService ) { }
  public books: BookInterface[];
  searchText;

  ngOnInit() {
    this.getBookList();
  }
  getBookList() {
    this.dataApi.getAllBooks().subscribe(books => this.books = books);
  }

}
