import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service/movies.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public formSearch: FormGroup;

  constructor(/*public dialog: MatDialog*/
    private fb: FormBuilder,
    public moviesService: MoviesService,
    public paginationService: PaginationService
  ) {

    this.formSearch = this.fb.group({
      title: ['']
    });

   }

  ngOnInit(): void {
  }

  onPlusClick(){
    // const dialogRef = this.dial
  }

  onSearch(){

    this.paginationService.isDataLoaded$.next(false);

    this.moviesService.filterMovie$.next({
      ...this.moviesService.filterMovie$.value,
      title: this.formSearch.controls['title'].value,
      page: 1,
    });

  }
  
}
