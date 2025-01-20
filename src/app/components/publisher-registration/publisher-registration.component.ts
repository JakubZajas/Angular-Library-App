import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {CommonModule, NgIf } from '@angular/common';
import { Publisher } from '../../models/publisher';


@Component({
  selector: 'app-publishers-registration',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './publisher-registration.component.html',
  styleUrl: './publisher-registration.component.scss',
  standalone: true
})

export class PublishingHouseRegistrationComponent {
  publisher: Publisher = new Publisher;
  publisherForm: FormGroup;
  viewMode = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    console.log("publisher form laoded")
    this.publisherForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      yearOfFunding: ['', [
        Validators.required, 
        Validators.max(new Date().getFullYear() + 1)
      ]],
      authors: ['', Validators.required],
      isStillOperating: [true],
    });
  }

  ngOnInit(): void {
    console.log("Publishing House Registration Component Initialized");
  }
  
  onSubmit(): void {
    if (this.publisherForm.valid) {
      const newPublisher = new Publisher(
        this.publisherForm.value.name,
        this.publisherForm.value.yearOfFunding,
        this.publisherForm.value.authors,
        this.publisherForm.value.isStillOperating,
      );

      console.log("new publisher registered: " + newPublisher);
      this.dataService.addPublisher(newPublisher).subscribe(
        (response) => {
          console.log('Publisher added successfully:', response);
          this.publisherForm.reset();
        });          
    }
  }

  toggleViewMode(): void {
    this.viewMode = !this.viewMode;
    if (this.viewMode) {
      this.publisherForm.disable();
    } else {
      this.publisherForm.enable();
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.publisherForm.get(controlName);
    return !!(control && control.hasError(errorName) && (control.dirty || control.touched));
  }

}
