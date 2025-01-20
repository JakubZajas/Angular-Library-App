export class Author {
    id?: number;
    firstName: string;
    surname: string;
    yearOfBirth: number;
    biography: string;
    published: string[];
    worksFor : string;
    
    constructor(
      firstName: string = '',
      surname: string = '',
      yearOfBirth: number = new Date().getFullYear(),
      biography: string = '',
      published: string[] = [],
      worksFor : string = '',
      id?: number
    ) {
      this.firstName = firstName;
      this.surname = surname;
      this.yearOfBirth = yearOfBirth;
      this.biography = biography;
      this.published = published;
      this.worksFor = worksFor;
      this.id = id;
    }
  }