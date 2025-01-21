import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-show-books',
  imports: [CommonModule],
  templateUrl: './show-books.component.html',
  styleUrl: './show-books.component.scss'
})
export class ShowBooksComponent implements OnInit, OnDestroy {
    books: Book[] = [];


  constructor (
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.loadBooks();
  }
  
  ngOnDestroy(): void {
    console.log("Exiting this empty shell")
  }


  loadBooks(){
    this.dataService.getBooks()
      .subscribe((data: Book[]) =>{
        this.books = data
        console.log(data);
    })
  }
  
  deleteBook(book: Book) {
    alert('kasujemy książke o id' + book.id);
    this.dataService.removeBook(book).subscribe(() => {
      this.loadBooks();
    })
  }
}
