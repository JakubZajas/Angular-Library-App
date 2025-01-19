import { Routes } from '@angular/router';
// export const routes: Routes = [
//   {
//     path: '',
//     component: BookFormComponent
//   }
// ];

export const routes: Routes = [
  { path: 'book-registration', loadComponent: () => import('./components/book-form/book-form.component').then(m => m.BookFormComponent) },
  { path: 'author-registration', loadComponent: () => import('./components/author-registration/author-registration.component').then(m => m.AuthorRegistrationComponent) },
  { path: 'publisher-registration', loadComponent: () => import('./components/publishing-house-registration/publishing-house-registration.component').then(m => m.PublishingHouseRegistrationComponent) },
  { path: 'show-books', loadComponent: () => import('./components/show-books/show-books.component').then(m => m.ShowBooksComponent) },
  { path: 'show-authors', loadComponent: () => import('./components/show-authors/show-authors.component').then(m => m.ShowAuthorsComponent) },
  { path: 'show-publishers', loadComponent: () => import('./components/show-publishing-houses/show-publishing-houses.component').then(m => m.ShowPublishingHousesComponent) },
  { path: '', redirectTo: '/show-books', pathMatch: 'full' },
];