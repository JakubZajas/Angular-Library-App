import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-registration',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './author-registration.component.html',
  styleUrl: './author-registration.component.scss'
})
export class AuthorRegistrationComponent {
  authorForm: FormGroup;
  viewMode = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.authorForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      yearOfBirth: ['', [
        Validators.required, 
        Validators.max(new Date().getFullYear() + 1)
      ]],
      biography: ['', [Validators.required, Validators.minLength(5)]],
      published: ['', Validators.required],
      worksFor: ['', Validators.required],
    });
  }


  onSubmit(): void {

    if (this.authorForm.valid) {
      const newAuthor = new Author(
        this.authorForm.value.firstName,
        this.authorForm.value.surname,
        this.authorForm.value.yearOfBirth,
        this.authorForm.value.biography,
        this.authorForm.value.published,
        this.authorForm.value.worksFor
      );
      console.log("new author registered: " + newAuthor);
      this.dataService.addAuthor(newAuthor).subscribe(
        (response) => {
          console.log('Author added successfully:', response);
          this.authorForm.reset();
        });
    }
  }

  toggleViewMode(): void {
    this.viewMode = !this.viewMode;
    if (this.viewMode) {
      this.authorForm.disable();
    } else {
      this.authorForm.enable();
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.authorForm.get(controlName);
    return !!(control && control.hasError(errorName) && (control.dirty || control.touched));
  }
}
