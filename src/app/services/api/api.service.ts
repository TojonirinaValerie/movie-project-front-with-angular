import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/interfaces/ApiResponse';
import { Filter } from 'src/app/interfaces/Filter';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';
import configs from 'src/app/json/configs.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = `${configs.baseUrl}${configs.backUrl}`;
  private api = {
    getListMovies: 'movies/get_movies',
    getMovieById: 'movies/get_by_id'
  }

  constructor(private http: HttpClient) { }

  getListMovies<T>(filter?: Filter){

    return this.http.get<ApiResponse>(`${this.BASE_URL}${this.api.getListMovies}`, {

      params:{

        limit: filter?.limit ? filter.limit : 12 ,
        page: filter?.page ? filter.page : 1,
        title: filter?.title ? filter.title : '',
        genre: filter?.genre ? filter.genre : ''

      }

    });

  }

  getMovieById<T>(id: number){

    return this.http.get<ApiResponse>(`${this.BASE_URL}${this.api.getMovieById}/${id}`);

  }

}
