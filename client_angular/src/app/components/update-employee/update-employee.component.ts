import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employe} from "../../models/Employe";
import {EmployeService} from "../../services/employe.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employeecomponent.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employe: Employe = new Employe();
  constructor(private employeService: EmployeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employe = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeService.updateEmployee(this.id, this.employe).subscribe( data =>{
      console.log('employee from submit', this.employe)
      console.log('data from submit', data)
        this.goToEmployeesList();
      }
      , error => console.log(error));
  }

  goToEmployeesList(){
    this.router.navigate(['/employees']);
  }

  annuler() {
    this.router.navigate(['/employees']);
  }
}
