import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { WordsComponent } from './words/words.component';
import { TestComponent } from './test/test.component';


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
  {path:"postdetail/:id",component:DetailComponent},
  {path:"words",component:WordsComponent},
  {path:"test", component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
