import { Component, OnInit } from '@angular/core';
import {BlogitemsService} from '../blogitems.service';
import {Router , ActivatedRoute} from '@angular/router';
import {Userinterface} from '../userinterface';
import {UserServiseService} from '../user-service.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class ViewDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router ,
              private request: BlogitemsService, private  user: UserServiseService) { }
  blog: Object[];
  isSelected= false;
  Users: Userinterface[];
  activeUser: Userinterface;
  ngOnInit() {const id = +this.route.snapshot.paramMap.get('id');
    this.getBlog(id);
    // this.request.getBlog(id).subscribe(some => {
    //   this.blog = some;
    this.user.getUsers().subscribe(d => this.Users = d);
    this.activeUser = this.Users.find(users => users.status === true);
  }
  getBlog(id) {
    this.request.getBlog(id).subscribe(some => {
      this.blog = some;
   });
  }
  goBack() {
    location.reload();
    this.router.navigate(['/showall']);
  }

}
