import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EquipementService} from "../../services/equipement.service";
import {Equipement} from "../../models/Equipement";
import {Subject} from "rxjs";
import {Bien} from "../../models/Bien";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit,OnDestroy,AfterViewInit {

  equipements: Equipement[] = [];
  dtOptions: DataTables.Settings = {};
  dataSource : MatTableDataSource<Equipement>;
  dtTrigger: Subject<any> = new Subject<any>();
  displayedColumns: string[] = ['nom', 'code', 'statut', 'criticite', 'disponibilite', 'type', 'noSerie', 'action'];
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
  constructor(private modalService: NgbModal,private  equipementService: EquipementService, private router:Router) {
    this.dataSource = new MatTableDataSource(this.equipements);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.getEquipements() ;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true,

    };
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
  private getEquipements() {
    this.equipementService.getEquipements().subscribe( data =>{
      this.equipements = data;

      this.dtTrigger.next(data);
    })
  }

  updateEquipement(id: number) {
    this.router.navigate(['update-equipement', id]) ;
  }

  deleteEquipement(){
    const id = this.deleteId ;
    this.equipementService.deleteEquipement(id).subscribe( (data: any) => {
      console.log(" deleted !", data);
      this.getEquipements();
      this.modalService.dismissAll();
    })
  }

  createEquipement(equipement:Equipement) {
    this.equipementService.createEquipement(equipement).subscribe(data =>{
      this.getEquipements();
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
