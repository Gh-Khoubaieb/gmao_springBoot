import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';

import {CreateArtisanComponent} from "../create-artisan/create-artisan.component";
import {CreatePanneComponent} from "../create-bien/create-panne.component";
import {AlertComponent} from "../alert/alert.component";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Fournisseur} from "../../models/Fournisseur";
import {FournisseurService} from "../../services/fournisseur.service";
import {Societe} from "../../models/Societe";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-bien',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit,OnDestroy,AfterViewInit {
  fourinsseurs : Fournisseur[] =[];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  idSociete : number =  11;

  private deleteId: number =0;
  displayedColumns: string[] = ['nom', 'adresse', 'ville', 'telephone', 'description', 'action'];
  dataSource : MatTableDataSource<Fournisseur>;

  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any= MatSort;

  constructor(private modalService: NgbModal,
              private fournisseurService: FournisseurService,
              private  router: Router,
             ) {
    this.dataSource = new MatTableDataSource(this.fourinsseurs);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getFournisseurs();


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,

      dom: 'Bfrtip',
      processing: true,
      responsive: true,
      language:{  processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ &eacute;l&eacute;ments",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
/*
    this.httpClient.get<Bien[]>('http://localhost:8080/api/v1/biens')
      .subscribe(data => {
        console.log('data', data)
        this.biens = data;
        // Calling the DT trigger to manually render the table
       this.dtTrigger.next(this.biens);
        console.log('biens 1', this.biens)
      });
*/



    }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
   getFournisseurs() {
    this.fournisseurService.getFournisseurs().subscribe(data => {
     // console.log("d1ata bien from bien component", data)
      this.fourinsseurs = data ;
      this.dtTrigger.next(data);
      console.log("tab bien from component", this.fourinsseurs[0])
    })

  }
    updateFournisseur(id: number){
      this.router.navigate(['update-fournisseur', id]);
    }

    deleteFournisseur(){

      const id = this.deleteId ;
      this.fournisseurService.deleteFournisseur(id).subscribe( (data: any) => {
        console.log(" deleted !", data);
        this.getFournisseurs();
        this.modalService.dismissAll();
      })


/*
      this.bienService.deleteBienAndEquipmnet(this.deleteId, this.idEquipement).subscribe( (data: any) => {
        console.log(" deleted !", data);
        this.getBiens();
        this.modalService.dismissAll();
      })

 */


    }


    createFournisseur(fourinsseur:Fournisseur) {
    this.fournisseurService.createFournisseur(fourinsseur).subscribe(data =>{
      this.getFournisseurs();
      this.dtTrigger.next(data);
    })
    }




  openDelete( contentDelete: any, idFournisseur: number) {
    this.deleteId = idFournisseur;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  detailFournisseur2(idFournisseur: number) {
    this.router.navigate(['detail-fournisseur', idFournisseur]);
  }
}
