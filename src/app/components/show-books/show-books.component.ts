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
  // loadBooks(): void {
  //   this.dataService.getBooks().subscribe(books => {
  //     this.books = books;
  //   });
  // }

  // removeBook(id: string): void {
  //   console.log("remove book")
  //   this.loadBooks();
  //   this.dataService.removeBook(id).subscribe(() => {
  //     // Remove the book locally after it is removed from the server
  //     this.books = this.books.filter(book => book.id !== id);
  //   });
  // }

  
}
