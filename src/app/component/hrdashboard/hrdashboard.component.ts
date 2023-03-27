import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.css']
})
export class HRdashboardComponent implements OnInit {

  constructor(private route : Router) { }
  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
