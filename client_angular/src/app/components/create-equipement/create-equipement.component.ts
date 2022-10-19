import {Component, Inject, OnInit} from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {EquipementService} from "../../services/equipement.service";
import {Equipement} from "../../models/Equipement";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Subject} from "rxjs";
import { Location } from '@angular/common'
@Component({
  selector: 'app-create-bien',
  templateUrl: './create-equipement.component.html',
  styleUrls: ['./create-equipement.component.css']
})
export class CreateEquipementComponent implements OnInit {

  equipement : Equipement = new Equipement();
  idBien!: number ;
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public location:Location, public dialog: MatDialog,public dialogRef: MatDialogRef<CreateEquipementComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router, private equipementService: EquipementService) { }

  ngOnInit(): void {
  }

  saveEquipement() {
    this.equipementService.createEquipement(this.equipement).subscribe( data => {
  //    this.goToEquipementlist() ;
   //   this.equipementService.getEquipements();
    //  this.dtTrigger.next(data);
      this.annuler()
      console.log('data after add', data)

    })
   // this.dialog.closeAll();
  }

  onSubmit() {
    this.saveEquipement();

  //  console.log('idBien after submit', id)
  }

  goToEquipementlist() {
    this.router.navigate(['/equipements']) ;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
    annuler() {
      this.location.back() ;
      this.dialog.closeAll();

        this.dialogRef.close();

   // this.router.navigate(["/equipements"])
  }
}
export interface DialogData {
  id: number;
  name: string;
}
