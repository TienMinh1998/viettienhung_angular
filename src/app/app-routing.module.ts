import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent, // Use LoginLayoutComponent for login route
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {path:"postdetail/:id",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
