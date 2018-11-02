import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './module.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {


  constructor(private _router: Router) {

  }
  ngOnInit() {
  }

}
