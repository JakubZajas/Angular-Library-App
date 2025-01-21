export class Book {
    id?: number;
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
    description: string;
    publisher: string;
    isAvailable: boolean;
  
    constructor(
      title: string,
      author: string,
      publicationYear: number = new Date().getFullYear(),
      genre: string,
      description: string,
      publisher: string,
      isAvailable: boolean,
      id?: number
    ) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.genre = genre;
      this.description = description;
      this.publisher = publisher;
      this.isAvailable = isAvailable;
      this.id = id;
    }
  }