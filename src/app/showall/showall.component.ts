import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BlogitemsService} from '../blogitems.service';
import {DataFromAaddService} from '../data-from-aadd.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class ShowallComponent implements OnInit {
  blog: Object [];
  show: number ;
  @Output() notify: EventEmitter<any> = new EventEmitter();
 // @Output() notifyBlog: EventEmitter<any> = new EventEmitter();
  constructor(private  request: BlogitemsService, private  dataservice: DataFromAaddService) {
  }

  ngOnInit() {
    console.log(this.blog);
    this.request.getData().subscribe((data) => {
      this.blog = data;
      console.log(this.blog);
    });
    this.dataservice.getData()
      .subscribe(data => {
        this.blog.push(data);
      });
  }
  sendId(id, blog ) {
    const widget = {
      id: id,
      blog: blog
    };
    this.notify.emit(widget);
  }
}

