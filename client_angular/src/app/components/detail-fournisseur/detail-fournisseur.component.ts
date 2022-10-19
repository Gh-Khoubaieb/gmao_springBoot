import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {Equipement} from "../../models/Equipement";
import {MatDialog} from "@angular/material/dialog";
import {CreateEquipementComponent} from "../create-equipement/create-equipement.component";
import {EquipementService} from "../../services/equipement.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateEquipementComponent} from "../update-equipement/update-equipement.component";
import {Fournisseur} from "../../models/Fournisseur";
import {FournisseurService} from "../../services/fournisseur.service";
import {SocieteService} from "../../services/societe.service";
import {CreateSocieteComponent} from "../create-societe/create-societe.component";
import {Societe} from "../../models/Societe";
import {UpdateSocieteComponent} from "../update-societe/update-societe.component";

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.css']
})
export class DetailFournisseurComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private router:Router,
              private route:ActivatedRoute,
              private fournisseurService: FournisseurService,
              public dialog: MatDialog,
              private societeService: SocieteService)
  { }
  societeId !: number ;
  id : number =0 ;
  fournisseur : Fournisseur = new Fournisseur();
   societe: any ;
  displayedColumns: string[] = ['nom', 'type', 'criticite', 'photo', 'codeEquipement', 'TagQr', 'barCode', 'statut','classe', 'docurl', 'action'];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.fournisseurService.getFournisseurById(this.id).subscribe( data => {
        this.fournisseur = data ;
      //  this.societe = this.fournisseur.societes ;
        console.log(' equipement', this.societe)
        console.log(' bien', this.fournisseur)
    })
  }

  createDialog(idFournisseur:number) {
    const dialogRef = this.dialog.open(CreateSocieteComponent,{
      width:'800px',
      height :'500px',
      data : {id: idFournisseur}
    });
  console.log("idBien from eq", idFournisseur)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteSociete() {

  const id =this.societeId ;
  console.log("id from delete", id)
  console.log("his.bien.id from delete", this.fournisseur.id)
      this.societeService.deleteSocieteFournisseur( this.fournisseur.id, id).subscribe( (data: any) => {
        console.log(" deleted !", data);

       this.fournisseurService.getFournisseurById(this.id).subscribe(data=>{
         this.fournisseur = data ;
      //   this.societe = this.fournisseur.societes ;
      });
        this.modalService.dismissAll();
      })

  }

  openDelete(contentDelete: any, id: number) {

      this.societeId = id;
      this.modalService.open(contentDelete, {
        backdrop: 'static',
        size: 'lg'
      });

  }

  openUpdate( societe1: Societe) {
    const dialogRef = this.dialog.open(UpdateSocieteComponent,{
      width:'800px',
      height: '500px',
      data : {societe: societe1, idFournisseur: this.id}
    });
    console.log("equipement from eq", societe1)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
