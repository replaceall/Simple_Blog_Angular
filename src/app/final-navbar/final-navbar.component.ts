import { Component, OnInit } from '@angular/core';
import {UserServiseService} from "../user-service.service";
import {Userinterface} from "../userinterface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-final-navbar',
  templateUrl: './final-navbar.component.html',
  styleUrls: ['./final-navbar.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class FinalNavbarComponent implements OnInit {
Users: Userinterface[];
activeUser: Userinterface;

  constructor(private user: UserServiseService , private router: Router) { }

  ngOnInit() {
    this.user.getUsers()
      .subscribe( data => {
        this.Users = data;
      });
  }
  onLogOut() {
    this.activeUser = this.Users.find(item => item.status === true);
    if (this.activeUser) {
      this.activeUser.status = false;
    }
    this.user.updateUser(this.activeUser).subscribe();
    location.reload();
    this.router.navigate(['/user']);
  }

}
