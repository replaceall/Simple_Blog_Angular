import { Component, OnInit } from '@angular/core';
import {Userinterface} from "../userinterface";
import {UserServiseService} from "../user-service.service";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class MainNavbarComponent implements OnInit {
  Users: Userinterface[];
  activeUser: Userinterface;
  check = false;
  constructor(private user: UserServiseService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(data => {
      this.Users = data;
      this.activeUser = this.Users.find(u => u.status === true);
      if (this.activeUser) {
        this.check = this.activeUser.status;
      }
    });
  }

}
