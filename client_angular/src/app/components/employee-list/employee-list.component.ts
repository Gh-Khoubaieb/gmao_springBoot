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
import {EmployeService} from "../../services/employe.service";
import {Employe} from "../../models/Employe";
@Component({
  selector: 'app-emplyee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy,AfterViewInit {
  employees : Employe[] =[];
  displayedColumns: string[] = ['nom', 'prenom',  'adresse','email' , 'label', 'cin', 'telephone',  'action'];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  idEquipement : number = 0;
  dataSource : MatTableDataSource<Employe>;
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
              private employeService: EmployeService,
              private  router: Router,
  ) {
    this.dataSource = new MatTableDataSource(this.employees);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.getEmplyees();


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,


    };



  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
  getEmplyees() {
    this.employeService.getEmployees().subscribe(data => {
      // console.log("d1ata bien from bien component", data)
      this.employees = data ;
      //this.dtTrigger.next(data);
      console.log("tab bien from component", this.employees[0])
    })

  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(){

    const id = this.deleteId ;
    this.employeService.deleteEmployee(id).subscribe( (data: any) => {
      console.log(" deleted !", data);
      this.getEmplyees();
      this.modalService.dismissAll();
    })




  }


  createEmployee(employe:Employe) {
    this.employeService.createEmployee(employe).subscribe(data =>{
      this.getEmplyees();
      this.dtTrigger.next(data);
    })
  }




  openDelete( contentDelete: any, idEmployee: number) {
    this.deleteId = idEmployee;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  detailEmployee2(idEmployee: number) {
    this.router.navigate(['detail-employee', idEmployee]);
  }
  selection = new SelectionModel<Employe>(true, []);

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
  checkboxLabel(row?: Employe): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
