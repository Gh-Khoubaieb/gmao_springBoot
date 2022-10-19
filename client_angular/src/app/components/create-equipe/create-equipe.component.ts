import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {EquipementService} from "../../services/equipement.service";
import {Equipement} from "../../models/Equipement";
import {EquipeService} from "../../services/equipe.service";
import {Equipe} from "../../models/Equipe";

@Component({
  selector: 'app-create-bien',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent implements OnInit {

  equipe : Equipe = new Equipe();
  constructor(private router: Router, private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  saveEquipe() {
    this.equipeService.createEquipe(this.equipe).subscribe( data => {
      this.goToEquipelist() ;
    })
  }

  onSubmit() {
    this.saveEquipe();
  }

  goToEquipelist() {
    this.router.navigate(['/equipes']) ;
  }

  annuler() {
    this.router.navigate(["/equipes"])
  }
}
