import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_helper/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.authService.authenticate(this.username, this.password).subscribe((data) => {
      if(data == 'home'){
        this.invalidLogin = false;
        sessionStorage.setItem('username', this.username)
      }else if(data == 'login'){
        this.invalidLogin = true;
      }
      this.router.navigate([data]);
    });
  }
}
