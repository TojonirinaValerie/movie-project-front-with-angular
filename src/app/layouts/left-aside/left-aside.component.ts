import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service/movies.service';

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.css']
})
export class LeftAsideComponent implements OnInit {

  public listGenre: string[] = [];

  constructor(
    public moviesService: MoviesService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onGenreChange(genre: string){
    
    let checkBox = document.getElementById(genre) as HTMLFormElement;
    
    let genreDesignation = genre.split('-')[1];

    if(checkBox.checked){

      this.listGenre.push(genreDesignation);
      console.log('listGenre', this.listGenre);

    } else {

      let list = [];

      for (let i = 0; i < this.listGenre.length; i++) {
        
        if(this.listGenre[i]!=genreDesignation){

          list.push(this.listGenre[i]);

        }
        
      }

      this.listGenre = list;

    }

    let listGenreString = this.listGenre.join(';');
    
    this.moviesService.filterMovie$.next({
      ...this.moviesService.filterMovie$.value,
      genre: listGenreString,
      page: 1
    });
    
    this.route.navigate(['list']);

  }

}
