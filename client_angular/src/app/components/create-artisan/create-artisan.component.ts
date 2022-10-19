import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";
import {Artisan} from "../../models/Artisan";
import {ArtisanService} from "../../services/artisan.service";

@Component({
  selector: 'app-create-bien',
  templateUrl: './create-artisan.component.html',
  styleUrls: ['./create-artisan.component.css']
})
export class CreateArtisanComponent implements OnInit {

  artisan : Artisan = new Artisan();
  constructor(private router: Router, private artisanService: ArtisanService) { }

  ngOnInit(): void {
  }

  saveArtisan() {
    this.artisanService.createArtisan(this.artisan).subscribe( data => {
      this.goToArtisanlist() ;
    })
  }

  onSubmit() {
    this.saveArtisan();
  }

  goToArtisanlist() {
    this.router.navigate(['/artisans']) ;
  }

  annuler() {
    this.router.navigate(["/artisans"])
  }
}
