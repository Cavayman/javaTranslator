import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/", "/"),
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class NavigationComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  onClick() {
    if (this.show) {
      this.show = false;

    }
    else {
  this.show=true;
    }
  }
  ngOnInit() {
  }

}