import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

import {Equipement} from "../../models/Equipement";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {EquipementService} from "../../services/equipement.service";
import {DialogData} from "../create-equipement/create-equipement.component";

@Component({
  selector: 'app-equipement-create-dialog',
  templateUrl: './equipement-create-dialog.component.html',
  styleUrls: ['./equipement-create-dialog.component.css']
})
export class EquipementCreateDialogComponent implements OnInit {


  equipement : Equipement = new Equipement();
  idBien!: number ;
  ngOnInit(): void {
  }
  constructor(
  public location:Location,
  public dialog: MatDialog,


  private router: Router,
  private equipementService: EquipementService,
    public dialogRef: MatDialogRef<EquipementCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Equipement,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveEquipement(id:number) {
    this.equipementService.createEquipementBien(this.equipement,id).subscribe( data => {
      //    this.goToEquipementlist() ;
      this.equipementService.getEquipements();

      console.log('data after add', data)

    })
    this.dialog.closeAll();
  }

  onSubmit(id: number) {
    this.saveEquipement(id);

    //  console.log('idBien after submit', id)
  }

  goToEquipementlist() {
    this.router.navigate(['/biens/datail-bien/' + this.equipement.id]) ;
  }

  annuler() {

    this.dialog.closeAll();

    this.dialogRef.close();
    this.dialogRef.close();

    // this.router.navigate(["/equipements"])
  }



}
