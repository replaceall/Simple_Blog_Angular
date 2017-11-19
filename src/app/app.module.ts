import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowallComponent } from './showall/showall.component';
import { AddComponent } from './add/add.component';
import { NavRoutingModule } from './/nav-routing.module';
import {FormsModule} from '@angular/forms';
import {BlogitemsService} from './blogitems.service';
import {DataFromAaddService} from './data-from-aadd.service';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { SigninBarComponent } from './signin-bar/signin-bar.component';
import { UserformComponent } from './userform/userform.component';
import {UserServiseService} from "./user-service.service";
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FinalNavbarComponent } from './final-navbar/final-navbar.component';
import { YourblogsComponent } from './yourblogs/yourblogs.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowallComponent,
    AddComponent,
    CommentsSectionComponent,
    AddCommentsComponent,
    SingleSelectComponent,
    SigninBarComponent,
    UserformComponent,
    MainNavbarComponent,
    FinalNavbarComponent,
    YourblogsComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    NavRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BlogitemsService, DataFromAaddService,UserServiseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
