import {Component, Inject, OnInit} from '@angular/core';

import {Fournisseur} from "../../models/Fournisseur";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common'
import {FournisseurService} from "../../services/fournisseur.service";
import {Subject} from "rxjs";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DialogData} from "../create-equipement/create-equipement.component";


@Component({
  selector: 'app-create-bien',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.css']
})
export class CreateFournisseurComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject<any>();
  fournisseur : Fournisseur = new Fournisseur();
  idSociete!: number ;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: DialogData,private location: Location,private router: Router, private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
  }

  saveFournisseur(id:number) {
    this.fournisseurService.createFournisseurToSociete(id, this.fournisseur).subscribe( data => {
      console.log('data from submit', data)
      this.goToFournisseurlist() ;
      this.dtTrigger.next(data);
    })
  }

  onSubmit(id:number) {
    this.saveFournisseur(id);

  }

  goToFournisseurlist() {
    this.router.navigate(['/fournisseurs']) ;
  }

  annuler() {
   // const dialogRef = this.dialogRef.close();
  //  this.router.navigate([".."])
    this.location.back();
    this.dialog.closeAll();
  }
}
