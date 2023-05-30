import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  // public totalResult$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  // public page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  // public totalPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  // public limit$: BehaviorSubject<number> = new BehaviorSubject<number>(20);

  public isDataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public paginationModel$: BehaviorSubject<PaginationResult>;

  constructor() { 

    this.paginationModel$ = new BehaviorSubject<PaginationResult>({

      limit: 12,
      page: 1,
      totalPage: 1,
      totalResult: 0,
      totalRows: 0,
      rows: []

    });

  }

}
