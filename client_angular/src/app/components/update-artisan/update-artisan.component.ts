import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SocieteService} from "../../services/societe.service";
import {Societe} from "../../models/Societe";
import {Artisan} from "../../models/Artisan";
import {ArtisanService} from "../../services/artisan.service";

@Component({
  selector: 'app-update-societe',
  templateUrl: './update-artisan.component.html',
  styleUrls: ['./update-artisan.component.css']
})
export class UpdateArtisanComponent implements OnInit {

  id: number = 0;
  artisan: Artisan = new Artisan();
  constructor(private artisanService: ArtisanService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.artisanService.getArtisanById(this.id).subscribe(data => {
      this.artisan = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.artisanService.updateArtisan(this.id, this.artisan).subscribe( data =>{
        this.goToArtisansList();
      }
      , error => console.log(error));
  }

  goToArtisansList(){
    this.router.navigate(['/artisans']);
  }

  annuler() {
    this.router.navigate(['/artisans']);
  }
}
