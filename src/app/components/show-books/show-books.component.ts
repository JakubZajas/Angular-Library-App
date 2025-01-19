import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-show-books',
  imports: [CommonModule],
  templateUrl: './show-books.component.html',
  styleUrl: './show-books.component.scss'
})
export class ShowBooksComponent {
    books: Book[] = [];


  constructor (
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.dataService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  
}
