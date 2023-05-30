import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { PaginationResult } from 'src/app/interfaces/PaginationResult';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css']
})
export class SectionContainerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    
  }

}
