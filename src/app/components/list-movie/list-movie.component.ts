import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/Movie';
import { MoviesService } from 'src/app/services/movies.service/movies.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit, OnDestroy {

  public listMovie: Movie[] = [];

  public listParPage = [20, 40, 50, 100];

  public subscriptions: Subscription = new Subscription();

  constructor(
    public moviesService: MoviesService,
    public paginationService: PaginationService
  ) { }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();

  }

  ngOnInit(): void {

    this.getListMovie();

  }

  getListMovie() {

    this.subscriptions.add(this.moviesService.listMovie$.subscribe( data => {

      if(data){

        this.listMovie = data;

      }
      else{

        this.listMovie = [];

      }

    }));

    this.subscriptions.add(this.moviesService.filterMovie$.subscribe( filter => {

      this.moviesService.getListMovie();

    }));

  }

  pageChange(event: PaginationResult){

    this.moviesService.filterMovie$.next({
      ...this.moviesService.filterMovie$.value,
      page: event.page,
      limit: event.limit
    });

  }

}
