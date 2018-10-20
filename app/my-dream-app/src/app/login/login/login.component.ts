import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,) { }

  ngOnInit() {
  }

  login(username:string,password:string) {
    // this.authenticationService.login(username,password).then(resp => {
    //
    //   })
    //   .catch(failure => {
    //   });
  }




}
