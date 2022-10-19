import {Component, Inject, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Fournisseur} from "../../models/Fournisseur";
import {FournisseurService} from "../../services/fournisseur.service";
import {Subject} from "rxjs";
import {Location} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Equipement} from "../../models/Equipement";



@Component({
  selector: 'app-update-bien',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  id!: number;
  fournisseur: Fournisseur = new Fournisseur();
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private location: Location,
    private fournisseurService: FournisseurService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData2) { }
  idFournisseur!: number ;
  idSociete: number = this.data.idSociete ;
  fournisseurUpdated: Fournisseur = this.data.fournisseur;
  ngOnInit(): void {
    console.log('this.id from submit', this.id);
   // console.log('this.fournisseurUpdated.id from submit', this.fournisseurUpdated.id);
    this.id = this.route.snapshot.params['id'];
    console.log("this id from OnInt", this.route.snapshot.params['id'])
    this.fournisseurService.getFournisseurById(this.id).subscribe(data => {
      this.fournisseur = data;
      console.log("this fournisseur", this.fournisseur)
    }, error => console.log(error));
  }

  onSubmit(){

    this.fournisseurUpdated ?

    this.fournisseurService.updateFournisseurSociete(this.idSociete,this.fournisseurUpdated.id, this.fournisseur).subscribe( data =>{

      console.log('data from submit', data)
       // this.goToFournisseursList();
      }
      , error => console.log(error))
      :
      this.fournisseurService.updateFournisseur(this.idSociete, this.fournisseur).subscribe(data =>{
          //     this.goToBiensList();
          console.log("data from submit", data)
          this.location.back() ;
        }, error => console.log(error)
      )
  }

  goToFournisseursList(){
    this.router.navigate(['/fournisseurs']);
  }

  annuler() {
  //  this.router.navigate(['/fournisseurs']);
    this.location.back() ;
    this.dialog.closeAll();
  }

  updateFournisseur(id:number, fournisseur: Fournisseur) {

      this.fournisseurService.updateFournisseur(id, fournisseur).subscribe( data => {
        console.log('data update equ ', data)
        //  this.goToEquipementlist() ;
        this.fournisseurService.getFournisseurs();
        this.dtTrigger.next(data);
        console.log('data after add', data)
        this.dialog.closeAll();
      })


    this.dialog.closeAll();
  }
}
export interface DialogData2 {
  fournisseur: Fournisseur;
  idSociete: number;
}
