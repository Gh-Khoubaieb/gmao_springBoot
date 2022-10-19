import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {ArtisanService} from "../../services/artisan.service";
import {Artisan} from "../../models/Artisan";

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-artisan.component.html',
  styleUrls: ['./detail-artisan.component.css']
})
export class DetailArtisanComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private artisanService: ArtisanService) { }

  id : number =0 ;
  artisan !: Artisan ;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.artisanService.getArtisanById(this.id).subscribe( data => {
        this.artisan = data ;
    })
  }

}
