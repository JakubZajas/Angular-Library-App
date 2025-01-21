import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Publisher } from '../../models/publisher';

@Component({
  selector: 'app-show-publishers',
  imports: [CommonModule],
  templateUrl: './show-publishers.component.html',
  styleUrl: './show-publishers.component.scss'
})
export class ShowPublishingHousesComponent implements OnInit, OnDestroy{
  publishers: Publisher[] = [];

  constructor (
    private dataService: DataService
  ) {
    console.log("Show publishers loaded")
  }


  ngOnInit(): void {
    this.loadPublishers();
  }
  
  ngOnDestroy(): void {
    console.log("Exiting this empty shell")
  }


  loadPublishers(){
    this.dataService.getPublishers()
      .subscribe((data: Publisher[]) =>{
        this.publishers = data
        console.log(data);
    })
  }
  
  deletePublisher(publisher: Publisher) {
    alert('kasujemy publishera o id' + publisher.id);
    this.dataService.removePublisher(publisher).subscribe(() => {
      this.loadPublishers();
    })
  } 
}
