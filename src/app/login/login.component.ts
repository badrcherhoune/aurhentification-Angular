import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms'
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userFormGroup! : FormGroup;
  public errormessage :any;

  constructor(private fb : FormBuilder ,
    private serviceAhtentufication: AuthentificationService,
    private router:Router
    
    ){}
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      userName: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handelLogin(){
    let userName = this.userFormGroup.value.userName;
    let password = this.userFormGroup.value.password;
    this.serviceAhtentufication.connect(userName,password).subscribe({
      next: appUser=>{
        this.serviceAhtentufication.authentificate(appUser).subscribe({
          next: data=>{
            this.router.navigateByUrl("/admin");
          }
        })
      },error: err=> {
        this.errormessage = err;
      }
    })
  }

}
