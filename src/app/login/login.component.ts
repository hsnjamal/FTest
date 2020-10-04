import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(  private router: Router, private _LoginService: LoginService) { }

  user = 
  {
    firstName : '',
    lastName  : '',
    email     : '',
    password  : '',
  }
  errorMsg: string;
  passError: boolean = false;
  messages = 
  {
    invalid   : "Invalid email address",
    available : "Email available",
    exist     : "Email address already exist",
    passError : "Password length must be eight!"
  };
  getservice: any = [];
  listdata: any = [];
  error: boolean = false;
  ngOnInit() {
  }

 
  validateEmail(ev) {
    setTimeout(() => {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(ev))
      {
        this.isEmailAvailable(ev);
      } 
      else
      {
        this.errorMsg = this.messages.invalid;
        this.disableButton(true);
      }
    }, 1500);
   // debugger;  

  }
  disableButton(val)
  {
    this.error = !val;
  }

  isEmailAvailable(email)
  {
    this._LoginService.isEmailAvailable(email).subscribe(
      res =>{
        this.getservice = res;
        if(this.getservice.data.status ==  "OK")
        {
          this.errorMsg = this.messages.available;
          this.disableButton(false);
        }
        else
        {
          this.errorMsg = this.messages.exist;
          this.disableButton(true);
        }
      },
      err =>
      {
        console.log(err);
        
      });
  }
  signUp()
  {
    if(this.user.firstName == '' || this.user.lastName  == '' || this.user.email     == '' || this.user.password  == '')  
    {
      Swal.fire(
        'Cancelled',
        'Field cannot be empty :)',
        'error'
      );
    }
    else
    {
      
      if(this.user.password.length < 8)
      {
        this.passError = true;
        return;
      }
     
      this._LoginService.signUp(this.user).subscribe(
        res =>
        {
          console.log(res);
          
          Swal.fire('Successfull');          
        },
        err =>
        {
          
          Swal.fire(
            'Cancelled',
            'Already Exist :)',
            'error'
          );
        }
      )
    }
  }
  // signUp() {
  //   this.spinnerService.show();
  //   this._LoginService.login(this.userName, this.password).subscribe(data => {

  //     //debugger;
  //     console.log(data);
  //     this.getservice = data;
  //     //  debugger;
      

     
  //   }, (err) => {
  //     console.log('====================================');
  //     console.log(err);
  //     console.log('====================================');
  //     this.spinnerService.hide();
  //     this.error = true;


  //   });


  //   //console.log(this.listdata);
  //   // this.router.navigate(['home']);

  // }

}
