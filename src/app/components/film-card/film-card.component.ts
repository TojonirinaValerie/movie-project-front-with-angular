import { Component, Input, OnInit } from '@angular/core';
import configs from 'src/app/json/configs.json';
import { Movie } from 'src/app/interfaces/Movie';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  private serveurFile = `${configs.baseUrl}${configs.movieFolder}`;

  @Input() movie: Movie = {

    srcFolder: '',
    videoSource: '',
    imageSource: '',
    title: '',
    sinopsys: '',
    formatFile: '',
    mimeType: '',
    fileSize: 0,
    playtimeString: '',
    dateRelease: '',
    numPC: 1,
    numDisc: 1

  };

  public srcImage: string = '';
  public durre: string = '';
  public size: string = '';
  public srcVideo: string = '';

  constructor(
    public helperService: HelperService,
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {

    if(this.movie.imageSource.length!=0){

      this.srcImage = `${this.utilsService.getURLServeurFile(this.movie.numPC, this.movie.numDisc)}${this.movie.srcFolder}/${this.movie.imageSource}`;

    }else{

      this.srcImage = `assets/default.jpg`;

    }

    this.durre = this.helperService.playtimeStringToString(this.movie.playtimeString);
    this.size = this.helperService.sizeOctetToString(this.movie.fileSize);
    this.srcVideo = `${this.serveurFile}${this.movie.srcFolder}/${this.movie.videoSource}`;

  }

  onCardClick(){

    this.router.navigate(['movie', this.movie.id]);

  }

}
