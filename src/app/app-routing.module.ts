import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookComponent } from './book/book.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RetrieveAllMoviesComponent } from './retrieve-all-movies/retrieve-all-movies.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent},
  { path: 'create-profile', component: CreateprofileComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'user-dashboard', component: UserDashboardComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'retrieve-all-movies', component: RetrieveAllMoviesComponent},
  { path: 'edit-movie-record', component: EditMovieComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'booking-summary/:id', component: BookingSummaryComponent},
  { path: 'book/:id', component: BookComponent},
  { path: 'movie-detail/:id', component: MovieDetailsComponent},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
