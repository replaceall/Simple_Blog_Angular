import {Component, Input, OnInit} from '@angular/core';
import {BlogitemsService} from '../blogitems.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AddCommentsComponent implements OnInit {
@Input('blog') blog;
@Input ('id') id;
  constructor(private  request: BlogitemsService ,private router:Router) { }

  ngOnInit() {
  }
  addComment(id, body, author) {
    const widget = {
      body: body,
      author: author
    }
    this.blog[id-1].comments.push(widget);
    this.router.navigate(['/showall']);
  }
}
