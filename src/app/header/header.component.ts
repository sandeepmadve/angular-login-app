import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_helper/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(public loginService: AuthenticationService) {

  }

}
