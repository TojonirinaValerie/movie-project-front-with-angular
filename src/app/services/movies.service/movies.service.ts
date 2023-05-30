import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/ApiResponse';
import { Filter } from 'src/app/interfaces/Filter';
import { Movie } from 'src/app/interfaces/Movie';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';
import { ApiService } from '../api/api.service';
import { PaginationService } from '../pagination/pagination.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public listMovie$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  public detailMovie$: BehaviorSubject<Movie | undefined> = new BehaviorSubject<Movie | undefined>(undefined);

  public isDataLoaded$ : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  public filterMovie$ : BehaviorSubject<Filter>;

  constructor(
    private apiService: ApiService,
    private paginationService: PaginationService,
    private router: Router,
  ) { 

    this.filterMovie$ = new BehaviorSubject<Filter>({

      limit: 20,
      page: 1,
      title: '',
      genre: ''

    });

  }

  getListMovie(){

    this.apiService.getListMovies<ApiResponse>(this.filterMovie$.value).subscribe( data => {

      if(data){

        if(data.data.rows){

          this.setListMovie(data.data.rows);

        }

        this.setPagination(data.data);
        

      }

    });

  }

  setPagination(data: PaginationResult) {

    this.paginationService.paginationModel$.next(data);

  }

  setListMovie(listMovie: Movie[]) {

    this.listMovie$.next(listMovie);
    this.isDataLoaded$.next(true);
    this.paginationService.isDataLoaded$.next(true);

  }

  getMobieById(idMovie: number){
    
    this.isDataLoaded$.next(false);

    this.apiService.getMovieById<ApiResponse>(idMovie).subscribe( data => {

      if(data.succes){

        // let movie: Movie ={

        //   id?: datas.id,
        //   srcFolder: datas.srcFolder,
        //   videoSource: datas.videoSource,
        //   imageSource: datas.imageSource,
        //   title: datas.title, 
        //   sinopsys: datas.sinopsys,
        //   formatFile: datas.formatFile,
        //   mimeType: datas.mimeType,
        //   fileSize: datas.fileSize,
        //   playtimeString: datas.playtimeString,
        //   dateRelease: datas.dateRelease,
        //   listGenre?: datas.

        // } 

        let movie = data.data.rows as Movie;

        this.detailMovie$.next(movie);

      }
      else{

        this.router.navigate(['list']);

      }

    });

  }

}
