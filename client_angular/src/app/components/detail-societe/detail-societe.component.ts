import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {ArtisanService} from "../../services/artisan.service";
import {Artisan} from "../../models/Artisan";
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";
import {CreateEquipementComponent} from "../create-equipement/create-equipement.component";
import {Equipement} from "../../models/Equipement";
import {UpdateEquipementComponent} from "../update-equipement/update-equipement.component";
import {MatDialog} from "@angular/material/dialog";
import {EquipementService} from "../../services/equipement.service";
import {FournisseurService} from "../../services/fournisseur.service";
import {Fournisseur} from "../../models/Fournisseur";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateFournisseurComponent} from "../update-fournisseur/update-fournisseur.component";
import {CreateFournisseurComponent} from "../create-fournisseur/create-fournisseur.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-detail-societe',
  templateUrl: './detail-societe.component.html',
  styleUrls: ['./detail-societe.component.css']
})
export class DetailSocieteComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute,
              private societeService: SocieteService,
           public dialog: MatDialog,
              private fournisseurService: FournisseurService,
              private modalService: NgbModal) { }
  fournisseurId !: number ;
  id : number =0 ;
  societe : Societe  = new Societe();
  fournisseurs: any ;
  listFournisseur: any ;
  displayedColumns: string[] = ['nomFournisseur', 'ville', 'description', 'telephone', 'codePostal', 'adresse', 'action'];
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.fournisseurService.getFournisseurs().subscribe(data =>{
      this.listFournisseur = data ;
    })
    this.societeService.getSocieteById(this.id).subscribe( data => {
        this.societe = data ;
        this.fournisseurs = this.societe.fournisseurs ;
      console.log(' societe', this.societe)
      console.log(' fournisseurs', this.fournisseurs)
    })
  }
  createDialog(idSociete:number) {
    const dialogRef = this.dialog.open(CreateFournisseurComponent,{
      width:'800px',
      height :'500px',
      data : {id: idSociete}
    });
    console.log("idSociete from eq", idSociete)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteFournisseur() {

    const id =this.fournisseurId ;
    console.log("id from delete", id)
    console.log("his.bien.id from delete", this.societe.id)
    this.fournisseurService.deleteFournisseurSociete( this.societe.id, id).subscribe( (data: any) => {
      console.log(" deleted !", data);

      this.societeService.getSocieteById(this.id).subscribe(data=>{
        this.societe = data ;
        this.fournisseurs = this.societe.fournisseurs ;
      });
      this.modalService.dismissAll();
    })

  }

  openDelete(contentDelete: any, id: number) {

    this.fournisseurId = id;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });

  }

  openUpdate( fournisseur: Fournisseur) {
    const dialogRef = this.dialog.open(UpdateFournisseurComponent,{
      width:'800px',
      height: '500px',
      data : {fournisseur: fournisseur, idSociete: this.id}
    });
    console.log("fournisseur from eq", fournisseur)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addFournisseur(fou: Fournisseur) {
   // console.log('id fourni', fou)
   // console.log('id societe', this.societe.id)

    this.fournisseurService.createFournisseurToSociete(this.societe.id,fou).subscribe(data =>{
      this.societeService.getSocietes();
      this.dtTrigger.next(data);
      //this.router.navigate(['societes']);
      window.location.reload();

    })


  }
}
