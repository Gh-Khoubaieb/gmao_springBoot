import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {ArtisanService} from "../../services/artisan.service";
import {Artisan} from "../../models/Artisan";
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";
import {EquipementService} from "../../services/equipement.service";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private equipeService: EquipeService) { }

  id : number =0 ;
  equipe : Equipe = new Equipe();
  employes : any ;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    console.log('id equipe', this.id)
    this.equipeService.getEquipeById(this.id).subscribe( data => {
   //   console.log(' equipe', data)
        this.equipe = data ;
        this.employes = this.equipe.employees ;
    })
  }

}
