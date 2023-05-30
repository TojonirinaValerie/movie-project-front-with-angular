import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LeftAsideComponent } from './layouts/left-aside/left-aside.component';
import { SectionContainerComponent } from './layouts/section-container/section-container.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftAsideComponent,
    SectionContainerComponent,
    FilmCardComponent,
    PaginationComponent,
    ListMovieComponent,
    SpinnerComponent,
    DetailsMovieComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
