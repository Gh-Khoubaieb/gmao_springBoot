import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";


import {Subject} from "rxjs";
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Bien} from "../../models/Bien";


@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild(MatSort) sort:any= MatSort;
  equipes: Equipe[] = [];
  dtOptions: DataTables.Settings = {

  };
  dataSource : MatTableDataSource<Equipe>;
  displayedColumns: string[] = ['nom',  'disponibilite', 'dateDebut','dateFin', 'action']
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private  equipeService: EquipeService, private router:Router,private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.equipes)
  }
  private deleteId: number =0;
  ngOnInit(): void {
    this.getEquipes() ;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
  private getEquipes() {
    this.equipeService.getEquipes().subscribe( data =>{
      this.equipes = data;

      this.dtTrigger.next(data);
    })
  }

  updateEquipe(id: number) {
    this.router.navigate(['update-equipe', id]) ;
  }

  deleteEquipe(){
    const id = this.deleteId ;
    this.equipeService.deleteEquipe(id).subscribe( (data: any) => {
      console.log(" deleted !", data);
      this.getEquipes();
      this.modalService.dismissAll();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createEquipe(equipe:Equipe) {
    this.equipeService.createEquipe(equipe).subscribe(data =>{
      this.getEquipes();
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
