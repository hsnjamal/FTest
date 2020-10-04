import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
//import {Http,Response } from '@angular/http';  
import { AppComponent } from '../app.component';
// import 'rxjs/add/operator/map'; 
@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }


    isEmailAvailable(email) {
        let body = {
            "campaignUuid": AppComponent.token,
            "data": {
                "email": email
            }
        };
        return this.http.post(`${AppComponent.apiURL}check-user`, body);
    }

    signUp(user)
    {
        let body = {
            "campaignUuid": AppComponent.token,
            "data": {
                "firstName" : user.firstName,
                "lastName"  : user.lastName,
                "email"     : user.email,
                "password"  : user.password
            }
        };
        return this.http.post(`${AppComponent.apiURL}signup`, body);
    }

    // login(user, pass) {
    //     let body: FormData = new FormData();



    //     body.append('a', "2");
    //     //body.append('pass', pass);

    //     return this.http.post("http://localhost:18649/api/Home/post?a=1", body);
    // }
}  
