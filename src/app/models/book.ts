export class Book {
    id?: number;
    title: string;
    isbn: string;
    publicationYear: number;
    isAvailable: boolean;
    genre: string;
    description: string;
  
    constructor(
      title: string = '',
      isbn: string = '',
      publicationYear: number = new Date().getFullYear(),
      isAvailable: boolean = true,
      genre: string = '',
      description: string = '',
      id?: number
    ) {
      this.title = title;
      this.isbn = isbn;
      this.publicationYear = publicationYear;
      this.isAvailable = isAvailable;
      this.genre = genre;
      this.description = description;
      this.id = id;
    }
  }