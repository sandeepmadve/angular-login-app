import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nurseDet: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNurseDetails();
  }


  getNurseDetails(){
    this.http.get(environment.apiBaseUrl + '/nurses/5').subscribe(res => {
      this.nurseDet = res;
    });
  }

}
