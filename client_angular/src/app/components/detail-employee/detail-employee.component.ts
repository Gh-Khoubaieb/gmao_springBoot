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
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {EmployeService} from "../../services/employe.service";
import {Employe} from "../../models/Employe";


@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router:Router,
    private route:ActivatedRoute,
    private employeService: EmployeService,
    public dialog: MatDialog,
   ) { }
  equipementid !: number ;
  equipementID !: number ;

  id : number =0 ;
  employe : Employe = new Employe();
   equipment: any ;
 // equipement: Equipement = new  Equipement();
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'adresse', 'cin', 'label', 'telephone', 'action'];

  EQUIPEMENTForm : any ;
  isAddMode: boolean = false;
  ngOnInit(): void {

    this.EQUIPEMENTForm = new FormGroup({
      nom: new FormControl(''  , [Validators.required]),
      barCode: new FormControl('',[Validators.required]),
      docUrl: new FormControl('',[Validators.required]),
      classe: new FormControl('',[Validators.required]),
      noSerie: new FormControl('',[Validators.required]),
      photo: new FormControl('',[Validators.required]),
      tagQr: new FormControl('',[Validators.required]),
      criticite: new FormControl(' ',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      codeEquipement: new FormControl('',[Validators.required]),
      statut: new FormControl('',[Validators.required]),
    })

    this.id = this.route.snapshot.params['id'] ;
  //  this.isAddMode = !this.id;
    this.employeService.getEmployeeById(this.id).subscribe( data => {
        this.employe = data ;
       // this.equipment = this.employe.equipements ;
   //     console.log(' equipement', this.equipment)
        console.log(' bien', this.employe)
    })
  }
  openDialog(idEmployee:number): void {
    const dialogRef = this.dialog.open(EquipementCreateDialogComponent, {
      width:'800px',
      height: '500px',
      data : {id: this.id} ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    //  this.animal = result;
    });
  }
/*
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
  deleteEquipement() {

  const id =this.equipementid ;
  console.log("id from delete", id)
  console.log("his.bien.id from delete", this.bien.id)
      this.equipementService.deleteEquipementBien( this.bien.id, id).subscribe( (data: any) => {
        console.log(" deleted !", data);

       this.bienService.getBienById(this.id).subscribe(data=>{
         this.bien = data ;
         this.equipment = this.bien.equipements ;
      });
        this.modalService.dismissAll();
      })

  }
*/
  /*
  saveEquipement(id:number) {
    console.log("this equi from save", this.equipement)
    this.equipementService.createEquipementBien(this.EQUIPEMENTForm.value,id).subscribe( data => {
      //    this.goToEquipementlist() ;
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
  updateEquipement(id:number) {

    console.log("this equiID from update", this.equipementID)
    console.log("id from update", id)
    console.log("id Equipement from update", this.equipement.id)
    console.log("equipee update", this.equipement)
    console.log("equipee update 2", this.equipment)
    this.equipementService.updateEquipementBien(id, this.equipementID, this.EQUIPEMENTForm.value).subscribe( data => {
      //    this.goToEquipementlist() ;

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
    console.log('Name:' + this.EQUIPEMENTForm.value);
    if (this.isAddMode) {
      this.saveEquipement(id);
    } else {
      this.updateEquipement(id);
      this.equipementService.getEquipements().subscribe( data =>{
        this.equipement = this.bien.equipements;
      });
    }


    //  console.log('idBien after submit', id)
  }
  */
  /*
  openDelete(contentDelete: any, id: number) {

      this.equipementid = id;
      this.modalService.open(contentDelete, {
        backdrop: 'static',
        size: 'lg'
      });

  }
  openCreate(contentCreate: any, id: number, mod: boolean) {

    this.isAddMode = mod ;
    this.equipementid = id;
    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }
  openUpdateEqui(contentCreate: any, id: number,elementid: number, mod: boolean, e : Equipement) {
    this.EQUIPEMENTForm.setValue({
      nom : e.nom,
      barCode: e.barCode,
      docUrl: e.docUrl,
      classe: e.classe,
      noSerie: e.noSerie,
      photo: e.photo,
      tagQr: e.tagQr,
      criticite: e.criticite,
      type: e.type,
      codeEquipement: e.codeEquipement,
      statut:  e.statut,
    })
    this.isAddMode = mod ;
    this.equipementid = id;
    this.equipementID = elementid;

    this.modalService.open(contentCreate, {
      backdrop: 'static',
      size: 'lg'
    });

  }
  openUpdate( equipement: Equipement) {
    const dialogRef = this.dialog.open(UpdateEquipementComponent,{
      width:'800px',
      height: '500px',
      data : {equipement: equipement, idBien: this.id}
    });
    console.log("equipement from eq", equipement)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
*/
}
