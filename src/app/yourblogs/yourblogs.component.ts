import { Component, OnInit } from '@angular/core';
import {Userinterface} from '../userinterface';
import {Router} from '@angular/router';
import {UserServiseService} from '../user-service.service';
import {BlogitemsService} from '../blogitems.service';

@Component({
  selector: 'app-yourblogs',
  templateUrl: './yourblogs.component.html',
  styleUrls: ['./yourblogs.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class YourblogsComponent implements OnInit {
Users: Userinterface[];
activeUser: Userinterface;
blog: Object[];

  constructor(private router: Router , private request: UserServiseService , private blogs: BlogitemsService) { }

  ngOnInit() {
    this.request.getUsers().subscribe((data) => {
      this.Users = data;
      this.blogs.getData().subscribe((dataa) => {
        this.blog = dataa;
        console.log(this.blog);
        console.log(this.Users);
        this.activeUser = this.Users.find(Data => Data.status === true);
      });
    });
  }

}
