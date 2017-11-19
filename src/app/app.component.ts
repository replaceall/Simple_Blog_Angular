import { Component } from '@angular/core';
import {BlogitemsService} from './blogitems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlogitemsService]
})
export class AppComponent {
  title = 'app';
}
