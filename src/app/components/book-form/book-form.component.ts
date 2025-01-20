import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';
import { NgIf, NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-form',
  imports: [NgIf, NgFor, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  standalone: true
})
export class BookFormComponent {
  book: Book = new Book;
  bookForm: FormGroup;
  viewMode = false;

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
      publicationYear: ['', [Validators.required, Validators.max(2024)]],
      isAvailable: [true],
      genre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  onSubmit(): void {

    if (this.bookForm.valid) {
      const newBook = new Book(
        this.bookForm.value.title,
        this.bookForm.value.author,
        this.bookForm.value.publicationYear,
        this.bookForm.value.isAvailable,
        this.bookForm.value.genre,
        this.bookForm.value.description
      );
      console.log("new book registered: " + newBook);
      this.dataService.addBook(newBook).subscribe(
        (response) => {
          console.log('Book added successfully:', response);
          this.bookForm.reset();
        });
      // let result = this.dataService.addBook(newBook);
      // console.log(result);
      // this.bookForm.reset();
        
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


  // onSubmitForm(form: NgForm){
  //   this.dataService
  //     .addBook(this.book)
  //     .subscribe((data) => {
  //       console.log(data);
  //     })
  // }
}