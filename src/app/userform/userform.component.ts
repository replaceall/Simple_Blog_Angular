import { Component, OnInit, Output } from '@angular/core';
import {UserServiseService} from '../user-service.service';
import {Router, RouterModule} from '@angular/router';
import {EventEmitter} from '@angular/core';
import {isBoolean} from "util";
import {Userinterface} from "../userinterface";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class UserformComponent implements OnInit {
  id: number;
  Users: Userinterface[];
  active: Object[];
  loginUser: Userinterface;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor(private  user: UserServiseService, private router: Router) {
  }

  ngOnInit() {
    this.user.getUsers().subscribe(data => {
      this.Users = data;
    });
  }


  onLogIn(name, password){
    this.loginUser = this.Users.find(u => u.name === name && u.password === password);
    if (this.loginUser) {
      this.loginUser.status = true;
      this.user.updateUser(this.loginUser).subscribe();
      location.reload();
      this.router.navigate(['/showall']);
    }
    else {
      alert('Wrong password and username');
      this.router.navigate(['/showall']);
    }
  }
}
