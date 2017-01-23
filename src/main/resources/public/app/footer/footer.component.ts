import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  moduleId: module.id.replace("/dist/", "/"),
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
  str:string="";
  constructor(private footerService: FooterService) { }

  ngOnInit() {
  }
  sendEmail() {
    this.footerService.sendEmail(this.str);
  }

}