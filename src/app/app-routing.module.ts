import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { WordsComponent } from './words/words.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';
import { NewsComponent } from './news/news.component';
import { News } from './shared/models/news';


const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
      children: [
        { path: '', component: HomeComponent }
      ]
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
  {path:"test", component:TestComponent},
  {path:"home",component:HomeComponent},
  {path:"flashcard", component:FlashcardComponent},
  {path:"admin", component:AdminComponent,
  children: [
    { path: 'news', component: NewsComponent }
  ]
},
 {path:"news", component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
