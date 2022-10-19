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
import {SelectionModel} from "@angular/cdk/collections";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-bien',
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.css']
})
export class BienListComponent implements OnInit,OnDestroy,AfterViewInit {
  biens : Bien[] =[];
  displayedColumns: string[] = ['nom', 'adresse', 'disponibilite', 'codePostal', 'region', 'telephone', 'type', "equipements",'action'];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  idEquipement : number =  11;
  dataSource : MatTableDataSource<Bien>;
  private deleteId: number =0;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any= MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private modalService: NgbModal,
              private bienService: BienService,
              private  router: Router,
             ) {
    this.dataSource = new MatTableDataSource(this.biens);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.getBiens();


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
   getBiens() {
    this.bienService.getBiens().subscribe(data => {
     // console.log("d1ata bien from bien component", data)
      this.biens = data ;
      this.dtTrigger.next(data);
      console.log("tab bien from component", this.biens[0])
    })

  }
    updateBien(id: number){
      this.router.navigate(['update-bien', id]);
    }

    deleteBien(){

      const id = this.deleteId ;
      this.bienService.deleteBien(id).subscribe( (data: any) => {
        console.log(" deleted !", data);
        this.getBiens();
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


    createBien(bien:Bien) {
    this.bienService.createBien(bien).subscribe(data =>{
      this.getBiens();
      this.dtTrigger.next(data);
    })
    }




  openDelete( contentDelete: any, idBien: number) {
    this.deleteId = idBien;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  detailBien2(idBien: number) {
    this.router.navigate(['detail-bien', idBien]);
  }
  selection = new SelectionModel<Bien>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Bien): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
