import { Component, OnInit } from '@angular/core';

@Component({
	  moduleId: module.id.replace("/dist/", "/"),
	selector: 'learn-main',
	templateUrl: 'learn-main.component.html',
	styleUrls:['learn-main.component.css']
})

export class LearnMainComponent implements OnInit {

	ngOnInit() { }
}