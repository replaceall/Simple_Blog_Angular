import { Component, OnInit } from '@angular/core';
import {NavRoutingModule} from '../nav-routing.module';
import {DataFromAaddService} from '../data-from-aadd.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 // encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  userLogin(): void {
    this.router.navigate(['/user']);
  }
}
