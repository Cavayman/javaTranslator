import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable(
)
export class FooterService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = "http://"+window.location.hostname+":8080";

    constructor(private http: Http) {
        console.log(this.serverUrl);
    }

    sendEmail(email: string) {
        this.http.post(this.serverUrl+"/sendMail",{}, this.headers)
            .subscribe(data=>{console.log(data);
            return true ;
            },onerror=>{
                console.log(onerror);
        return false;    
        });
    }
}