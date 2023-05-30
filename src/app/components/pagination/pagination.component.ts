import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  // @Input() limit: number = 20
  // @Input() page: number = 1;
  // @Input() totalPage: number = 1;
  // @Input() totalRows: number = 0;
  // @Input() totalResult: number = 0;

  @Input() listParPage: number[] = [];

  @Output() changePage = new EventEmitter();

  public indexPage: any[] = [];

  pageModel: PaginationResult = {

    page: 1,
    limit: 20,
    totalPage: 1,
    totalRows: 0,
    totalResult: 0,
    rows: []

  }

  subscription: Subscription = new Subscription();

  constructor(
    public paginationService: PaginationService
  ) {

    this.subscription.add(this.paginationService.paginationModel$.subscribe( data => {

      this.pageModel = {
        ...data
      }

      this.createPages();

    }));

  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }

  ngOnInit(): void {

  }

  createPages(){

    this.indexPage = [];

    for(let i=1; i<=this.pageModel.totalPage; i++){

      this.indexPage.push(i);

    }

  }

  setPage(page: number, limit: number){

    this.paginationService.isDataLoaded$.next(false);

    this.pageModel.page = page;
    this.pageModel.limit = limit;

    this.changePage.emit(this.pageModel);

  }

  isSelected(parPage: number){

    if(parPage==this.pageModel.limit) return true;
    else return false;

  }

  isDisablePrevious(){

    if(this.pageModel.page == 1) return true;
    else return false;

  }

  isDisableNext(){

    if(this.pageModel.page == this.pageModel.totalPage) return true;
    else return false;

  }

  change(event: any){

    this.setPage(1, event.target.value);

  }

}
