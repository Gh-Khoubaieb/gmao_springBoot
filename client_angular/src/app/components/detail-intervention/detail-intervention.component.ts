import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {Equipement} from "../../models/Equipement";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateEquipementComponent, DialogData} from "../create-equipement/create-equipement.component";
import {EquipementService} from "../../services/equipement.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateEquipementComponent} from "../update-equipement/update-equipement.component";
import {NoopScrollStrategy} from "@angular/cdk/overlay";
import {EquipementCreateDialogComponent} from "../equipement-create-dialog/equipement-create-dialog.component";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Panne} from "../../models/Panne";
import {Intervention} from "../../models/Intervention";
import {PanneService} from "../../services/panne.service";
import {InterventionService} from "../../services/intervention.service";


@Component({
  selector: 'app-detail-intervention',
  templateUrl: './detail-intrevention.component.html',
  styleUrls: ['./detail-intervention.component.css']
})
export class DetailInterventionComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router:Router,
    private route:ActivatedRoute,
    //private panneService: InterventionService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private interventionService: InterventionService) { }
  interventiontId !: number ;


  id : number =0 ;
  intervention : Intervention = new Intervention();
  //interventions: any ;
  //intervention: Intervention = new  Intervention();
  //displayedColumns: string[] = ['codeIntervention', 'type', 'description','dateDeDebut', 'dateDeFin', 'heure', 'priorite',  'action'];

  InterventionForm : any ;
  isAddMode: boolean = false;
  ngOnInit(): void {
/*
    this.InterventionForm = this.formBuilder.group({
      description: [''],
      type: [''],
      priorite: [''],
      dateDeDebut: [''],
      dateDeFin: [''],
      heure: [''],
      codeIntervention: [''],
      statut: [''],
    })
    */
    this.id = this.route.snapshot.params['id'] ;
  //  this.isAddMode = !this.id;
    this.interventionService.getInterventionById(this.id).subscribe( data => {
        this.intervention = data ;
      //  this.interventions = this.panne.interventions ;
      //  console.log(' equipement', this.interventions)
       // console.log(' bien', this.bien)
    })
  }
  /*
  openDialog(idBien:number): void {
    const dialogRef = this.dialog.open(EquipementCreateDialogComponent, {
      width:'800px',
      height: '500px',
      data : {id: idBien} ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    //  this.animal = result;
    });
  }

  createDialog(idBien:number) {
    const dialogRef = this.dialog.open(CreateEquipementComponent,{
      width:'800px',
      height :'500px',
      data : {id: idBien} ,

    });
  console.log("idBien from eq", idBien)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
*/
  /*
  deleteIntervention() {

  const id =this.interventiontId ;
  console.log("id from delete", id)
  console.log("this.interventions.id from delete", this.panne.id)
      this.interventionService.deletePanneIntervention( id, this.panne.id).subscribe( (data: any) => {
        console.log(" deleted !", data);

       this.panneService.getPanneById(this.id).subscribe(data=>{
         this.panne = data ;
         this.interventions = this.panne.interventions ;
      });
        this.modalService.dismissAll();
      })

  }
*/
  /*
  saveIntervention(id:number) {
    console.log("this interventions from save", this.interventions)
    this.interventionService.createPanneIntervention(this.InterventionForm.value,id).subscribe( data => {
      //    this.goToEquipementlist() ;
      this.interventionService.getInterventions().subscribe( data =>{
        this.interventions = this.panne.interventions;
      });
      this.modalService.dismissAll();
      this.dialog.closeAll();
      console.log('data after add', data)

    })
    this.dialog.closeAll();
  }
*/
 /*
 updateIntervention(id:number) {

    console.log("this equiID from update", this.equipementID)
    console.log("id from update", id)
    console.log("id Equipement from update", this.equipement.id)
    console.log("equipee update", this.equipement)
    console.log("equipee update 2", this.equipment)


    this.interventionService.updatePanneIntervention(id, this.interventiontId, this.InterventionForm.value).subscribe( data => {
      //    this.goToEquipementlist() ;
      /*
      this.equipementService.getEquipements().subscribe( data =>{
        this.equipement = this.bien.equipements;
      });


      this.modalService.dismissAll();
      this.dialog.closeAll();
      console.log('data after add', data)

    })
    this.dialog.closeAll();
  }

  */
  /*
  onSubmit(id: number) {
    console.log('Name:' + this.InterventionForm.value);
    if (this.isAddMode) {
      this.saveIntervention(id);
    } else {
      this.updateIntervention(id);
      this.interventionService.getInterventions().subscribe( data =>{
        this.interventions = this.panne.interventions;
      });
    }


    //  console.log('idBien after submit', id)
  }
  /*
  openDelete(contentDelete: any, id: number) {

      this.interventiontId = id;
      this.modalService.open(contentDelete, {
        backdrop: 'static',
        size: 'lg'
      });

  }
  openCreate(contentCreate: any, id: number, mod: boolean) {

    this.isAddMode = mod ;
    this.interventiontId = id;
    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }
  openUpdateInter(contentCreate: any, id: number,elementid: number, mod: boolean, e : Intervention) {
    this.InterventionForm.setValue({
      codeIntervention : e.codeIntervention,
      priorite: e.priorite,
      heure: e.heure,
      dateDeDebut: e.dateDeDebut,
      dateDeFin: e.dateDeFin,
      description: e.description,
      statut: e.statut,
      type: e.type,
    })
    this.isAddMode = mod ;
  //  this.equipementid = id;
    this.interventiontId = elementid;

    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }
  openUpdate( intervention: Intervention) {
    const dialogRef = this.dialog.open(UpdateEquipementComponent,{
      width:'800px',
      height: '500px',
      data : {intervention: intervention, idBPanne: this.id}
    });
    console.log("equipement from eq", intervention)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   */

}
