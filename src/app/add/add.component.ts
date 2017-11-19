import { Component, OnInit } from '@angular/core';
import {Time} from '@angular/common';
import {BlogitemsService} from '../blogitems.service';
import {ShowallComponent} from '../showall/showall.component';
import {DataFromAaddService} from '../data-from-aadd.service';
import {Userinterface} from '../userinterface';
import {UserServiseService} from '../user-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
 // encapsulation: ViewEncapsulation.None
  providers: [BlogitemsService]
})
export class AddComponent implements OnInit {
  Users: Userinterface[];
  activeUser: Userinterface;

  constructor(private  request: BlogitemsService, private  dataservice: DataFromAaddService, private  user: UserServiseService, private router: Router) {
  }

  ngOnInit() {
    this.user.getUsers().subscribe((data) => {
      this.Users = data;
      this.activeUser = this.Users.find(Data => Data.status === true);
      console.log(this.activeUser);
    });
  }

  add_to_blog(title, body, url,category) {
    console.log(this.Users);
    console.log("something");
    console.log(category)
    //this.activeUser = this.Users.find(Data => Data.status === true);
     const widget  = {
      'title' : title,
      'body' : body,
      'author' : this.activeUser.name,
      'comments' : [
        {
          'body': 'its_trail' + title,
          'author': 'Mahender'
        }
        ],
       'likes' : 0,
      'authorId' : this.activeUser.id,
      'image' : url,
       'category' : category,
       'favourite': [],
      'createdOn' : Date.now()
    };
    // widget.comments= " ";
     if (title.trim().length !== 0 && body.trim().length !== 0 ) {
     this.request.postData(widget).subscribe();
     alert('Added Successfully');
     location.reload();
     this.router.navigate(['/showall']);
     } else {
     alert('Body and Title Should not be empty /n Blog Not added');
     location.reload();
     this.router.navigate(['/showall']);
     }
     }
  }






