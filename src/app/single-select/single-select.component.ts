import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {BlogitemsService} from '../blogitems.service';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class SingleSelectComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router , private request: BlogitemsService) { }
  blog: Object[];
  updateSelect= false;
  ngOnInit() {const id = +this.route.snapshot.paramMap.get('id');
    this.getBlog(id);
  }
  getBlog(id){
    this.request.getBlog(id).subscribe(some => {
      this.blog = some;
    });
  }
  updateBlogForm(post){
    this.updateSelect = true;
  }
  updateBlog(post, value, title) {
    if (value.trim().length === 0 || title.trim().length === 0) {
    this.updateSelect = true;
      setInterval(alert('Enter Body And Title'), 3000); } else {
      this.updateSelect = false;
      post.title = title;
      post.body = value;
      this.request.updateBlog(post).subscribe();
      location.reload();
      setInterval(alert('Updated Succesfully'), 2000);
    }
  }
  deleteBlog(post){

    this.request.deleteBlog(post).subscribe();
    setInterval(alert('Blog Deleted'), 2000);
    location.reload();
    this.router.navigate(['/showall']);
  }
  goBack(){
    location.reload();
    this.router.navigate(['/showall']);
  }

  }




