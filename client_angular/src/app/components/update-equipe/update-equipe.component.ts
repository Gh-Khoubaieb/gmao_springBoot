import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Equipement} from "../../models/Equipement";
import {EquipementService} from "../../services/equipement.service";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-update-bien',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  id: number = 0;
  equipe: Equipe = new Equipe();
  constructor(private equipeService: EquipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.equipeService.getEquipeById(this.id).subscribe(data => {
      this.equipe = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.equipeService.updateEquipe(this.id, this.equipe).subscribe( data =>{
        this.goToEquipesList();
      }
      , error => console.log(error));
  }

  goToEquipesList(){
    this.router.navigate(['/equipes']);
  }

  annuler() {
    this.router.navigate(['/equipes']);
  }
}
