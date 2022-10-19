import {Component, Inject, OnInit} from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Equipement} from "../../models/Equipement";
import {EquipementService} from "../../services/equipement.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import { Location } from '@angular/common'
@Component({
  selector: 'app-update-bien',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent implements OnInit {

  id!: number ;

  equipement: Equipement = new Equipement();
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private location: Location,
    private equipementService: EquipementService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
              ) { }
  idEquipement!: number ;
  idBien: number = this.data.idBien ;
  equipementUpdated: Equipement = this.data.equipement;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.equipementService.getEquipementById(this.id).subscribe(data => {
      console.log("data from onnit" , data)
      this.equipement = data;


    }, error => console.log(error));
  }

  onSubmit(){
   // console.log("idBien from submit", this.idBien)
    console.log("equipement from submit", this.equipement )


    this.equipementUpdated ?

    this.equipementService.updateEquipementBien(  this.idBien,this.equipementUpdated.id ,  this.equipementUpdated).subscribe( data =>{
       // this.goToBiensList();
        console.log("Equipement from submit", this.equipementUpdated)
        console.log("data from submit", data)
        this.dialog.closeAll();
      }
      , error => console.log(error))
      :


      this.equipementService.updateEquipement(this.id, this.equipement).subscribe(data =>{
   //     this.goToBiensList();
          console.log("data from submit", data)
          this.location.back() ;
      }, error => console.log(error)
      )

  }

  goToBiensList(){
    this.router.navigate(['/equipements']);
  }

  annuler() {
  //  this.router.navigate(['/equipements']);
    this.location.back() ;
    this.dialog.closeAll();
  }

  updateEquipement(id:number) {
    this.equipementService.getEquipementById(id).subscribe( data =>{
      console.log('data get equ ', data)
      this.equipementService.updateEquipement(id, data).subscribe( data => {
        console.log('data update equ ', data)
        //  this.goToEquipementlist() ;
        this.equipementService.getEquipements();
        this.dtTrigger.next(data);
        console.log('data after add', data)
        this.dialog.closeAll();
      })
    }) ;

    this.dialog.closeAll();
  }

}
export interface DialogData {
  equipement: Equipement;
  idBien: number;
}
