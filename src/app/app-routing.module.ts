import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  {
    path: '',
    component: MainAppComponent, // Use AppLayoutComponent for all routes except login
    children: [
      {path:"", component:HomeComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent, // Use LoginLayoutComponent for login route
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
