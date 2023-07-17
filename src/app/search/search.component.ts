import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  faBookmark,
  faStar,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  books = [];
  faBookmark = faBookmark;
  faStar = faStar;
  faSearch = faSearch;
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  handleSearch() {
    const searchedAuthor = this.searchText;
    return this.http
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=inauthor=' +
          searchedAuthor
      )
      .toPromise()
      .then((response: GoogleBooksResponse) => {
        const filteredItems = response.items.filter((item) => {
          return item.volumeInfo.imageLinks;
        });
        this.books = filteredItems;
      });
  }

  handleSave(book) {
    this.firestore.doc(`collection/${book.id}`).set(book, { merge: true });
  }
}
