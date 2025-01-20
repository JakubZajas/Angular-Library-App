export class Publisher {
    id?: number;
    name: string;
    yearOfFunding: number;
    authors: string[];
    isStillOperating: boolean;
    
    constructor(
        name: string = '',
        yearOfFunding: number = new Date().getFullYear(),
        authors: string[] = [],
        isStillOperating: boolean = true,
        id?: number
    ) {
        this.name = name;
        this.yearOfFunding = yearOfFunding;
        this.authors = authors;
        this.id = id;
        this.isStillOperating = isStillOperating;
    }
    
}
