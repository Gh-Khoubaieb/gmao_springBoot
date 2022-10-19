import { Component, OnDestroy, OnInit} from '@angular/core';

import {Router} from "@angular/router";

import {Subject} from "rxjs";

import {Artisan} from "../../models/Artisan";
import {ArtisanService} from "../../services/artisan.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-bien',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.css']
})
export class ArtisanListComponent implements OnInit,OnDestroy {
  artisans : Artisan[] =[];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  private deleteId: number = 0;





  constructor(private artisanService: ArtisanService, private  router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getArtisans();


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
   getArtisans() {
    this.artisanService.getArtisans().subscribe(data => {
     // console.log("d1ata bien from bien component", data)
      this.artisans = data ;
      this.dtTrigger.next(data);
     // console.log("tab bien from component", this.biens[0])
    })

  }
    updateArtisan(id: number){
      this.router.navigate(['update-artisan', id]);
    }

    deleteArtisan(){
    const  id = this.deleteId;
      this.artisanService.deleteArtisan(id).subscribe( (data: any) => {
        console.log(" deleted !", data);
        this.getArtisans();
      })
      this.modalService.dismissAll();
    }

    createArtisan(artisan:Artisan) {
    this.artisanService.createArtisan(artisan).subscribe(data =>{
      this.getArtisans();
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
