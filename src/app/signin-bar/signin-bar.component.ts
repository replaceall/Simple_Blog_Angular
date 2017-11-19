import { Component, OnInit } from '@angular/core';
import {UserServiseService} from '../user-service.service';
import {Router} from "@angular/router";
import {Userinterface} from '../userinterface';

@Component({
  selector: 'app-signin-bar',
  templateUrl: './signin-bar.component.html',
  styleUrls: ['./signin-bar.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class SigninBarComponent implements OnInit {
  activeUser:Userinterface;
  loggedIn :boolean;
  loggedOut : boolean;
  name: string;
  id = 0;

  constructor(private  user: UserServiseService, private  router: Router) {
  }

  ngOnInit() {
      this.user.activeUser().subscribe(user => {this.activeUser = user;
        this.loggedIn = this.activeUser ? true : false;
        this.loggedOut = this.activeUser ? false : true;
    });
  }

  SignOut() {
      this.activeUser.status = false;
      this.user.updateUser(this.activeUser).subscribe();
    }
  }

  // getData(data) {
  //   console.log(data);
  //   this.id = data.id;
  //   this.name = data.name;
  //   if (this.id > 0) {
  //     this.loggedIn = true;
  //     this.loggedOut = false;
  //     this.isSelect = false;
  //   }
  // }

