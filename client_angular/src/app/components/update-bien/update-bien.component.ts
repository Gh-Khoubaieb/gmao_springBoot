import { Component, OnInit } from '@angular/core';
import {Bien} from "../../models/Bien";
import {BienService} from "../../services/bien.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-bien',
  templateUrl: './update-bien.component.html',
  styleUrls: ['./update-bien.component.css']
})
export class UpdateBienComponent implements OnInit {

  id!: number;
  bien: Bien = new Bien();
  constructor(private bienService: BienService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bienService.getBienById(this.id).subscribe(data => {
      this.bien = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.bienService.updateBien(this.id, this.bien).subscribe( data =>{
      console.log('bien from submit', this.bien)
      console.log('data from submit', data)
        this.goToBiensList();
      }
      , error => console.log(error));
  }

  goToBiensList(){
    this.router.navigate(['/biens']);
  }

  annuler() {
    this.router.navigate(['/biens']);
  }
}
