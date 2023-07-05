import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { DetailComponent } from './detail/detail.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddpostComponent } from './addpost/addpost.component';
import { NgbAccordionModule, NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatPipe } from './pipecustoms/date-pipe-custom.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WordsComponent } from './words/words.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DasboardOverviewComponent } from './components/dasboard-overview/dasboard-overview.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddvocabularyComponent } from './words/addvocabulary/addvocabulary.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeadertopComponent } from './components/headertop/headertop.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChartComponent } from './components/chart/chart.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PostComponent,
    DetailComponent,
    EditPostComponent,
    AddpostComponent,
    DateFormatPipe,
    DropdownComponent,
    WordsComponent,
    TestComponent,
    MainComponent,
    DasboardOverviewComponent,
    AddvocabularyComponent,
    CarouselComponent,
    HeadertopComponent,
    HeaderItemComponent,
    FlashcardComponent,
    ChartComponent,
    NewsComponent,
    AdminComponent,
    AdminNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSummernoteModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgbRatingModule,
    NgbAccordionModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatButtonModule,
     MatDividerModule,
     MatIconModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
    NgbModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    ChartsModule
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.wanderingCubes,
    //   backdropBackgroundColour: 'rgba(0,0,0,0.1)',
    //   backdropBorderRadius: '4px',
    //   primaryColour: '#ffffff',
    //   secondaryColour: '#ffffff',
    //   tertiaryColour: '#ffffff'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
