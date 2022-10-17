import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { RetrieveAllMoviesComponent } from './retrieve-all-movies/retrieve-all-movies.component';
import { DisplayAllMoviesComponent } from './display-all-movies/display-all-movies.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CreateprofileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutComponent,
    AddMovieComponent,
    EditMovieComponent,
    RetrieveAllMoviesComponent,
    DisplayAllMoviesComponent,
    CheckoutComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
