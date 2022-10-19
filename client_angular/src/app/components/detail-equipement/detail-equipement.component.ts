import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BienService} from "../../services/bien.service";
import {Bien} from "../../models/Bien";
import {ArtisanService} from "../../services/artisan.service";
import {Artisan} from "../../models/Artisan";
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";
import {EquipementService} from "../../services/equipement.service";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";
import {Equipement} from "../../models/Equipement";
import {Location} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PanneService} from "../../services/panne.service";
import {MatDialog} from "@angular/material/dialog";
import {Panne} from "../../models/Panne";

@Component({
  selector: 'app-detail-equipement',
  templateUrl: './detail-equipement.component.html',
  styleUrls: ['./detail-equipement.component.css']
})
export class DetailEquipementComponent implements OnInit {

  constructor(private location: Location,
              private router:Router,
              private route:ActivatedRoute,
              private equipementService: EquipementService,
              private formBuilder: FormBuilder,
                private modalService: NgbModal,
              private panneService: PanneService,
              public dialog: MatDialog,
  ) { }
  PanneForm : any ;
  id !: number  ;
  equipement !: Equipement ;
  pannes : any ;
  panneId !: number ;
  equipementId !: number ;
  displayedColumns: string[] = ['code', 'type', 'description', 'date', 'heure', 'frequence', "priorite",'interventions', 'action'];
  isAddMode: boolean = false;
  ngOnInit(): void {

    this.PanneForm = this.formBuilder.group({
      description: [''],
      type: [''],
      priorite: [''],
      date: [''],
      heure: [''],
      code: [''],
      frequence: [''],
    })
    this.id = this.route.snapshot.params['id'] ;
    this.equipementService.getEquipementById(this.id).subscribe( data => {
        this.equipement = data ;
        this.pannes = this.equipement.pannes ;

    })
  }
  retour() {
  //  this.router.navigate([`/biens/detail-bien/${this.id}`]) ;
    this.location.back()

  }
  onSubmit(id: number) {
    console.log('Name:' + this.PanneForm.value.heure);
    console.log('Id panne:' + id);
    if (this.isAddMode) {
      this.savePanne(id) ;
    } else {
      this.UpdatePanne(id);
      this.equipementService.getEquipements().subscribe( data =>{
        this.pannes = this.equipement.pannes;
      });
    }


    //  console.log('idBien after submit', id)
  }

  UpdatePanne(id:number) {


    this.panneService.updatePanneEquipement(id, this.equipementId, this.PanneForm.value).subscribe( data => {

      this.modalService.dismissAll();
      this.dialog.closeAll();
      console.log('data after add', data)

    })
    this.dialog.closeAll();
  }
  savePanne(id:number) {
    console.log("this equi from save", this.pannes)
    this.panneService.createPanneEquipement(this.PanneForm.value,id).subscribe( data => {
      //    this.goToEquipementlist() ;
      this.panneService.getPannes().subscribe( data =>{
        this.pannes = this.equipement.pannes;
      });
      this.modalService.dismissAll();
      this.dialog.closeAll();
      console.log('data after add', data)

    })
    this.dialog.closeAll();
  }
  openCreate(contentCreate: any, id: number, mod: boolean) {


    this.panneId = id;
    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }

  openDelete(contentDelete: any, id: number) {

    this.equipementId = id;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });

  }


  openUpdatePanne(contentCreate: any, id: number,elementid: number, mod: boolean, e : Panne) {
    this.PanneForm.setValue({
      code : e.code,
      description: e.description,

      date: e.date,
      heure: e.heure,
      frequence: e.frequence,
      priorite: e.priorite,

      type: e.type,

    })

    this.equipementId = elementid;

    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }

  deletePanne() {

    const id =this.equipementId ;
    console.log("id from delete", id)
    console.log("this.equipement.id from delete", this.equipement.id)
    this.panneService.deletePanneEquipement(  this.equipement.id, id).subscribe( (data: any) => {
      console.log(" deleted !", data);

      this.equipementService.getEquipementById(this.id).subscribe(data=>{
        this.equipement = data ;
        this.pannes = this.equipement.pannes ;
      });
      this.modalService.dismissAll();
    })

  }
}
