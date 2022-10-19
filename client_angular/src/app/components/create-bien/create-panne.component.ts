import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common'
import {BienListComponent} from "../bien-list/bien-list.component";

@Component({
  selector: 'app-create-bien',
  templateUrl: './create-panne.component.html',
  styleUrls: ['./create-panne.component.css']
})
export class CreatePanneComponent implements OnInit {

  bien : Bien = new Bien();
  constructor(private location: Location,private router: Router, private bienService: BienService) { }

  ngOnInit(): void {
  }

  saveBien() {
    this.bienService.createBien(this.bien).subscribe( data => {

      this.goToBienlist() ;

    })
  }

  onSubmit() {
    this.saveBien();

  }

  goToBienlist() {
    this.router.navigate(['/biens']) ;
  }

  annuler() {
   // const dialogRef = this.dialogRef.close();
  //  this.router.navigate([".."])
    this.location.back()
  }
}
