import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-authors',
  imports: [CommonModule],
  templateUrl: './show-authors.component.html',
  styleUrl: './show-authors.component.scss'
})
export class ShowAuthorsComponent implements OnInit, OnDestroy {
  authors: Author[] = [];


  constructor (
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  ngOnDestroy(): void {
    console.log("Exiting this empty shell")
  }

  loadAuthors(){
      this.dataService.getAuthors()
        .subscribe((data: Author[]) =>{
          this.authors = data
          console.log(data);
      })
  }

  deleteAuthor(author: Author) {
      alert('kasujemy authora o id' + author.id);
      this.dataService.removeAuthor(author).subscribe(() => {
        this.loadAuthors();
      })
    }

}
