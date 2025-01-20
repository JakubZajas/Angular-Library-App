import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Author } from '../models/author';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';
  private bookList: Book[] = [];

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  addBook(book: Book): Observable<Book> {
    console.log("adding new book: " + book)
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }

  removeBook(book: Book) {
    return this.http.delete<Book>(`${this.apiUrl}/books/${book.id}`);
  }

  // getBooks() : Book[] {
  //   return this.bookList;
  // }

  // addBook(customer: Book) {
  //   this.bookList.push(customer);
  //   console.log('zawartość Service:', this.bookList);
  // }
  // removeBook(book: Book){
  //   console.log("rodzic ma usunąc:", book)
  //   this.bookList = this.bookList.filter(( x: Book) => {
  //     return x.id !== book.id
  //   })
  //   return this.bookList;
  // }

  // Authors
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/authors`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiUrl}/authors`, author);
  }

  removeAuthor(author: Author) {
    return this.http.delete<Author>(`${this.apiUrl}/authors/${author.id}`);
  }

}