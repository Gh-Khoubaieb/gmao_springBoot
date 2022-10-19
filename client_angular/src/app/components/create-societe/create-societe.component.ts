import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";

@Component({
  selector: 'app-create-bien',
  templateUrl: './create-societe.component.html',
  styleUrls: ['./create-societe.component.css']
})
export class CreateSocieteComponent implements OnInit {

  societe : Societe = new Societe();
  constructor(private router: Router, private societeService: SocieteService) { }

  ngOnInit(): void {
  }

  saveSociete() {
    this.societeService.createSociete(this.societe).subscribe( data => {
      this.goToSocietelist() ;
    })
  }

  onSubmit() {
    this.saveSociete();
  }

  goToSocietelist() {
    this.router.navigate(['/societes']) ;
  }

  annuler() {
    this.router.navigate(["/societes"])
  }
}
