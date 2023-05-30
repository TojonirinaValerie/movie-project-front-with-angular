import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/Movie';
import { HelperService } from 'src/app/services/helper/helper.service';
import { MoviesService } from 'src/app/services/movies.service/movies.service';
import configs from 'src/app/json/configs.json';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit, OnDestroy {

  public movie: Movie= {

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
    numDisc: 1,
    listGenre: []

  };
  public srcImage = '';
  public isSinopsysExist$ = new BehaviorSubject<boolean>(false);
  public srcVideo = '';


  public isInfo$ = new BehaviorSubject<boolean>(true);

  public subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public moviesService: MoviesService,
    public helperService: HelperService,
    private utilsService: UtilsService
  ) {  }

  ngOnInit(): void {

    this.isSinopsysExist$.next(false);

    this.movie.id = parseInt(this.route.snapshot.params['id']);

    if(this.movie.id){

      this.moviesService.getMobieById(this.movie.id);

    }
    else{

      this.router.navigate(['list']);

    }

    this.subscriptions.add(this.moviesService.detailMovie$.subscribe( data => {

      if(data){

        console.log('data ===> ', data);

        this.movie = data;
        this.moviesService.isDataLoaded$.next(true);
        this.srcVideo = `${this.utilsService.getURLServeurFile(this.movie.numPC, this.movie.numDisc)}${this.movie.srcFolder}/${this.movie.videoSource}`;
        this.getSrcVideo();

        if(this.movie.imageSource.length!=0){

          this.srcImage = `${this.utilsService.getURLServeurFile(this.movie.numPC, this.movie.numDisc)}${this.movie.srcFolder}/${this.movie.imageSource}`;

        }
        else{

          this.srcImage = `assets/default.jpg`;

        }

        if(this.movie.sinopsys.length!=0) {

          this.isSinopsysExist$.next(true);

        }

      }

    }));

    console.log(this.movie);

  }

  ngOnDestroy(): void {

    this.subscriptions.unsubscribe();
    this.isSinopsysExist$.next(false);

  }

  toogleIsInfo(value: boolean){

    this.isInfo$.next(value);

  }

  getSrcVideo(){

    console.log('lien ',this.srcVideo.split(' ').join('%20'));

    return this.srcVideo.split(' ').join('%20');

  }

  onCopyText(id: string){

    let element = document.getElementById('copy-btn');

    let elementText = this.getSrcVideo();
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode?.removeChild(inputElement);

  }
}
