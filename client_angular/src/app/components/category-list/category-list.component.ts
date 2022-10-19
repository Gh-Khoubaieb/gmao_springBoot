import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/Category";
import {Subject} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Equipement} from "../../models/Equipement";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService:CategoryService) {
    this.dataSource = new MatTableDataSource(this.cateogries);
  }
  //dtOptions: DataTables.Settings = {};
  cateogries : Category[]= []
  //dtTrigger: Subject<any> = new Subject<any>();
  dataSource : MatTableDataSource<Category>;
  displayedColumns: string[] = ['name',  'type', 'createdDate', 'action'];

  ngOnInit(): void {
   /*
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };
  */
    this.getCategories();
    console.log("  cateogries : Category[]= []", this.cateogries)

  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data =>{
      this.cateogries = data;
     // this.dtTrigger.next(data);
      console.log(".net data", data)
    })
  }

  exportToSheet() {
    console.log(".btn foctyrza")
    this.categoryService.exportCategoriesToSheet().subscribe(data =>{
     // this.cateogries = data;
      // this.dtTrigger.next(data);
      console.log(".net data olalala", data)
    })
  }
}
