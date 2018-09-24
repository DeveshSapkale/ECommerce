import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

isLoggedIn: boolean;

  constructor() { this.isLoggedIn = true;

  }

  ngOnInit() {
  }

}
