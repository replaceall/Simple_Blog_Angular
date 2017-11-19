import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Headers, Http} from '@angular/http';

const BASE_URL = 'http://localhost:5040/blog/';
const header = {headers: new Headers ({'Content-Type': 'application/json'})};

@Injectable()
export class BlogitemsService {

  constructor(private  http: Http ) { }

  getData() {
    return this.http.get(BASE_URL).map(res => res.json());
  }
  postData(data) {
  return this.http.post(BASE_URL , data, header)
    .map(res => res.json());
  }
  updateBlog(data) {
    return this.http.patch(BASE_URL + data.id, data, header)
      .map(res => res.json());
  }
  deleteBlog(data){
    return this.http.delete(BASE_URL + data.id, header ).map(res => res.json()) ;
  }
  getBlog(id){
    return this.getData().map((blogs) => blogs.find(b => b.id === id));
  }
}
