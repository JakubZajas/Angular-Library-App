import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { Publisher } from '../models/publisher';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';
  private bookList: Book[] = [];

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  addBook(book: Book): Observable<Book> {
    console.log('adding new book: ' + book);
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }

  removeBook(book: Book) {
    return this.http.delete<Book>(`${this.apiUrl}/books/${book.id}`);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/authors`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.apiUrl}/authors`, author);
  }

  removeAuthor(author: Author) {
    return this.http.delete<Author>(`${this.apiUrl}/authors/${author.id}`);
  }

  getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.apiUrl}/publishers`);
  }

  addPublisher(publisher: Publisher): Observable<Publisher> {
    return this.http.post<Publisher>(`${this.apiUrl}/publishers`, publisher);
  }

  removePublisher(publisher: Publisher) {
    return this.http.delete<Publisher>(
      `${this.apiUrl}/publishers/${publisher.id}`
    );
  }
}
