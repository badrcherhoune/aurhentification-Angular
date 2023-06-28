import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit{

  constructor(public autService: AuthentificationService,private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handelLogout(){
    this.autService.logOut().subscribe({
      next: value=>{
        this.router.navigateByUrl("/login");
      },
      error: err=>{
        console.log(err);
      }
    })
  }

}
