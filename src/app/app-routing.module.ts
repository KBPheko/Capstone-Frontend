import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent},
  { path: 'create-profile', component: CreateprofileComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'user-dashboard', component: UserDashboardComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
