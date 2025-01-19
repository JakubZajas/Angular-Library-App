// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { AuthorRegistrationComponent } from './components/author-registration/author-registration.component';
import { ShowAuthorsComponent } from './components/show-authors/show-authors.component';
import { PublishingHouseRegistrationComponent } from './components/publishing-house-registration/publishing-house-registration.component';
import { ShowPublishingHousesComponent } from './components/show-publishing-houses/show-publishing-houses.component';


const routes: Routes = [
  { path: 'book-registration', component: BookFormComponent },
  { path: 'author-registration', component: AuthorRegistrationComponent },
  { path: 'publishing-house-registration', component: PublishingHouseRegistrationComponent },
  { path: 'show-books', component: ShowBooksComponent },
  { path: 'show-authors', component: ShowAuthorsComponent },
  { path: 'show-publishing-houses', component: ShowPublishingHousesComponent },
  { path: '', redirectTo: '/book-registration', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }