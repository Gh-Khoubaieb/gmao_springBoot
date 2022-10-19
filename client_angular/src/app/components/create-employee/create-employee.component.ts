import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { Location } from '@angular/common'
import {Employe} from "../../models/Employe";
import {EmployeService} from "../../services/employe.service";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employe: Employe = new Employe();

  constructor(private location: Location, private router: Router, private employeService: EmployeService) {
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeService.createEmployee(this.employe).subscribe(data => {

      this.goToEmployeelist();

    })
  }

  onSubmit() {
    this.saveEmployee();

  }

  goToEmployeelist() {
    this.router.navigate(['/employees']);
  }

  annuler() {
    // const dialogRef = this.dialogRef.close();
    //  this.router.navigate([".."])
    this.location.back()
  }
}
