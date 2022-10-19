import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SocieteService} from "../../services/societe.service";
import {Societe} from "../../models/Societe";

@Component({
  selector: 'app-update-societe',
  templateUrl: './update-societe.component.html',
  styleUrls: ['./update-societe.component.css']
})
export class UpdateSocieteComponent implements OnInit {

  id: number = 0;
  societe: Societe = new Societe();
  constructor(private societeService: SocieteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.societeService.getSocieteById(this.id).subscribe(data => {
      this.societe = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.societeService.updateSociete(this.id, this.societe).subscribe( data =>{
        this.goToSocietesList();
      }
      , error => console.log(error));
  }

  goToSocietesList(){
    this.router.navigate(['/societes']);
  }

  annuler() {
    this.router.navigate(['/societes']);
  }
}
