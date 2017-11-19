import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowallComponent} from './showall/showall.component';
import {AddComponent} from './add/add.component';
import {RouterModule} from '@angular/router';
import {CommentsSectionComponent} from './comments-section/comments-section.component';
import {SingleSelectComponent} from './single-select/single-select.component';
import {UserformComponent} from './userform/userform.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {YourblogsComponent} from "./yourblogs/yourblogs.component";
import {ViewDetailComponent} from "./view-detail/view-detail.component";

const navroutes = [
  {path: 'showall' , component: ShowallComponent},
  {path: 'add' , component : AddComponent},
  {path: 'getblog/:id', component : SingleSelectComponent},
  {path: 'user' , component : UserformComponent},
  {path: 'root' , component : NavbarComponent},
  {path: 'yourblogs', component : YourblogsComponent},
  {path: 'viewdetail' , component : ViewDetailComponent},
  {path: 'getblogdetail/:id' , component : ViewDetailComponent},
  {path: '**', component: ShowallComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(navroutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class NavRoutingModule { }



