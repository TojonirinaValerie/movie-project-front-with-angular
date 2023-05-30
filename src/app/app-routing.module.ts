import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'', component: ListMovieComponent},
  {path:'list', component: ListMovieComponent},
  {path: 'movie/:id', component: DetailsMovieComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
