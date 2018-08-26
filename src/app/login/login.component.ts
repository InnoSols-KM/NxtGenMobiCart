import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NGXLogger]
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    constructor(private logger: NGXLogger, private router: Router) { }

    ngOnInit() {
       var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
       var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    login(){
        this.logger.info("Inside Login Call");
        this.router.navigateByUrl('dashboard');
    }
}
