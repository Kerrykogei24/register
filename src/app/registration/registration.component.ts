import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegisterService]
})
export class RegistrationComponent implements OnInit {
register: any ;


  constructor(private registerService:RegisterService) { }

  ngOnInit(){
    this.register ={
      username:'',
      password1:'',
      password2:'',
      email:'',
      refferal_code:'',
      phone_number:'',
      device_details:'',
      location:''
    };
  }
  registerUser(){
    
this.registerService.registerNewUser(this.register).subscribe(  
  response => {
  alert('User'+ this.register.username +'created')
},
error => console.log("error", error));

}


}
