import { Component, OnInit , Input } from '@angular/core';
import {BlogitemsService} from '../blogitems.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class CommentsSectionComponent implements OnInit {
  blog: Object[] ;
  id: number;
  isSelect = this.id;
   constructor(private request: BlogitemsService) { }

  ngOnInit() {
  }
  getId(data) {
     console.log(data);
     this.id = data.id;
     this.blog = data.blog;
     this.isSelect = this.id;
  }
//   this.request.getData().subscribe((data) => {
//   postData(data) {
//     return this.http.post(BASE_URL,data, header)
//       .map(res => res.json())
//
//   }
   addComments(id, body, author){
     const widget = {
       body: body,
       author: author
     };
   this.request.postData(widget).map((data) => {
     this.blog[id-1]
   });
   }
}
