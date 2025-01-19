import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';
import { NgIf, NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-form',
  imports: [NgIf, NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  standalone: true
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  books: Book[] = [];
  viewMode = false;
  submitted = false;

  genres = [
    'Fiction',
    'Fantasy',
    'Science',
    'History',
    'Biography'
  ];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      publicationYear: ['', [Validators.required, Validators.min(1800), Validators.max(2024)]],
      isAvailable: [true],
      genre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.dataService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = new Book(
        this.bookForm.value.title,
        this.bookForm.value.isbn,
        this.bookForm.value.publicationYear,
        this.bookForm.value.isAvailable,
        this.bookForm.value.genre,
        this.bookForm.value.description
      );
      
      this.dataService.addBook(newBook).subscribe({
        next: () => {
          this.loadBooks();
          this.bookForm.reset();
        },
        error: (error) => console.error('Error adding book:', error)
      });
    }
  }

  toggleViewMode(): void {
    this.viewMode = !this.viewMode;
    if (this.viewMode) {
      this.bookForm.disable();
    } else {
      this.bookForm.enable();
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!(control && control.hasError(errorName) && (control.dirty || control.touched));
  }
}