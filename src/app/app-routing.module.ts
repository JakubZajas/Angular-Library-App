// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
  //   declarations: [],
  //   imports: [
    //     CommonModule
    //   ]
    // })
    // export class AppRoutingModule { }
    
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { AuthorRegistrationComponent } from './components/author-registration/author-registration.component';
import { ShowAuthorsComponent } from './components/show-authors/show-authors.component';

import { PublishingHouseRegistrationComponent } from './components/publisher-registration/publisher-registration.component';
import { ShowPublishingHousesComponent } from './components/show-publishers/show-publishers.component';

const routes: Routes = [
  // { path: 'book-registration', component: BookFormComponent },
  // { path: 'author-registration', component: AuthorRegistrationComponent },
  // { 
  //   path: 'publisher-registration', 
  //   loadComponent: () => import('./components/publisher-registration/publisher-registration.component')
  //     .then(m => m.PublishingHouseRegistrationComponent) 
  // },
  // { path: 'show-books', component: ShowBooksComponent },
  // { path: 'show-authors', component: ShowAuthorsComponent },
  // { 
  //   path: 'show-publishers', 
  //   loadComponent: () => import('./components/show-publishers/show-publishers.component')
  //     .then(m => m.ShowPublishingHousesComponent) 
  // },
  // { path: '', redirectTo: '/book-registration', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }