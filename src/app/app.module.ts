import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NgbAccordionModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatPipe } from './pipecustoms/date-pipe-custom.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
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
