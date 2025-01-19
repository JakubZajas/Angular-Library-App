export class Author {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    biography: string;
    hasPublished: boolean;
    specialization: string;
  
    constructor(
      firstName: string = '',
      lastName: string = '',
      email: string = '',
      biography: string = '',
      hasPublished: boolean = false,
      specialization: string = '',
      id?: number
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.biography = biography;
      this.hasPublished = hasPublished;
      this.specialization = specialization;
      this.id = id;
    }
  }