import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/", "/"),
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}