import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  employeeList: IEmployee [];
  showEdit :boolean;



  constructor (private route : Router) { 
    this.employeeList = [];
    this.showEdit = false;
    this.addEmployee();

  }
  addEmployee(){
    this.employeeList = [
      {Dob: '12/05/2001',Email:'vino@gmail.com',EmployeeId:1,FirstName:'Vino',LastName:'Employee',Salary: 9000},
      {Dob: '19/02/1999',Email:'kala@gmail.com',EmployeeId:2,FirstName:'Kalaivani',LastName:'Employee 2',Salary: 5000},
      {Dob: '01/04/2000',Email:'sumi@gmail.com',EmployeeId:3,FirstName:'Sumithira',LastName:'Employee 3',Salary: 9000},
      {Dob: '12/12/2000',Email:'gayu@gmail.com',EmployeeId:4,FirstName:'Gayathri',LastName:'Employee 4',Salary: 8000},
      {Dob: '14/05/2001',Email:'vicky@gmail.com',EmployeeId:5,FirstName:'Vignesh',LastName:'Employee 5',Salary: 8500},
      {Dob: '02/05/1998',Email:'rani@gmail.com',EmployeeId:6,FirstName:'Ranigaza',LastName:'Employee 6',Salary: 9500},
      {Dob: '09/01/2001',Email:'ragu@gmail.com',EmployeeId:7,FirstName:'Raghul',LastName:'Employee 7',Salary: 8000},
      {Dob: '17/05/1999',Email:'ajna@gmail.com',EmployeeId:8,FirstName:'Ajna minnath',LastName:'Employee 8',Salary: 9000},
      {Dob: '11/08/1999',Email:'sanjai@gmail.com',EmployeeId:9,FirstName:'Sanjai',LastName:'Employee 9',Salary: 9000},

    ]
  }
  ngOnInit(): void {

  }
  EditEmp(){
    this.showEdit = true;

  }
  UpdateEmp(){
    this.showEdit = false;

  }

  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
