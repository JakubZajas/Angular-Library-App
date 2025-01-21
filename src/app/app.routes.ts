import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'book-registration', loadComponent: () => import('./components/book-form/book-form.component').then(m => m.BookFormComponent) },
  { path: 'show-books', loadComponent: () => import('./components/show-books/show-books.component').then(m => m.ShowBooksComponent) },

  { path: 'author-registration', loadComponent: () => import('./components/author-registration/author-registration.component').then(m => m.AuthorRegistrationComponent) },
  { path: 'show-authors', loadComponent: () => import('./components/show-authors/show-authors.component').then(m => m.ShowAuthorsComponent) },

  {path: 'publisher-registration', loadComponent: () => import('./components/publisher-registration/publisher-registration.component').then(m => m.PublishingHouseRegistrationComponent)},
  {path: 'show-publishers', loadComponent: () => import('./components/show-publishers/show-publishers.component').then(m => m.ShowPublishingHousesComponent)},
  
  { path: '', redirectTo: '/show-books', pathMatch: 'full' },
];
