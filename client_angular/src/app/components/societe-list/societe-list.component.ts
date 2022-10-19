import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';
import {Societe} from "../../models/Societe";
import {SocieteService} from "../../services/societe.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-bien',
  templateUrl: './societe-list.component.html',
  styleUrls: ['./societe-list.component.css']
})
export class SocieteListComponent implements OnInit,OnDestroy,AfterViewInit {
  societes : Societe[] =[];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  displayedColumns: string[] = ['nom', 'adresse', 'codePostal', 'site', 'telephone', 'description', 'action'];
  dataSource : MatTableDataSource<Societe>;
  private deleteId: number =0;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any= MatSort;

  constructor(private modalService: NgbModal,private societeService: SocieteService, private  router: Router) {
    this.dataSource = new MatTableDataSource(this.societes);
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
    this.getSocietes();


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };



    }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
   getSocietes() {
    this.societeService.getSocietes().subscribe(data => {
      console.log("d1ata societe from societe component", data)
      this.societes = data ;
      this.dtTrigger.next(data);
      console.log("tab societe from component", this.societes[0])
    })

  }
    updateSociete(id: number){
      this.router.navigate(['update-societe', id]);
    }

    deleteSociete(){
      const id = this.deleteId ;
      this.societeService.deleteSociete(id).subscribe( (data: any) => {
        console.log(" deleted !", data);
        this.getSocietes();
        this.modalService.dismissAll();

      })
    }

    createSociete(societe:Societe) {
    this.societeService.createSociete(societe).subscribe(data =>{
      this.getSocietes();
    })
    }

  openDelete( contentDelete: any, id: number) {
    this.deleteId = id;
    this.modalService.open(contentDelete, {
      backdrop: 'static',
      size: 'lg'
    });
  }
}
