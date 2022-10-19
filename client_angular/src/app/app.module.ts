import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienListComponent } from './components/bien-list/bien-list.component';
import { HttpClientModule} from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import { EquipementListComponent } from './components/equipement-list/equipement-list.component';
import { UpdateBienComponent } from './components/update-bien/update-bien.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import { CreatePanneComponent } from './components/create-bien/create-panne.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
//import {MatInputModule} from "@angular/material/input";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {DataTablesModule} from "angular-datatables";
import {CreateEquipementComponent} from "./components/create-equipement/create-equipement.component";
import {UpdateEquipeComponent} from "./components/update-equipe/update-equipe.component";
import {EquipeListComponent} from "./components/equipe-list/equipe-list.component";
import {CreateEquipeComponent} from "./components/create-equipe/create-equipe.component";
import {ArtisanListComponent} from "./components/artisan-list/artisan-list.component";
import {CreateSocieteComponent} from "./components/create-societe/create-societe.component";
import {UpdateSocieteComponent} from "./components/update-societe/update-societe.component";
import {CreateArtisanComponent} from "./components/create-artisan/create-artisan.component";
import {UpdateArtisanComponent} from "./components/update-artisan/update-artisan.component";
import {UpdateEquipementComponent} from "./components/update-equipement/update-equipement.component";
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {SocieteListComponent} from "./components/societe-list/societe-list.component";
import { AlertComponent } from './components/alert/alert.component';
import {DetailBienComponent} from './components/detail-bien/detail-bien.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {DetailArtisanComponent} from "./components/detail-artisan/detail-artisan.component";
import {DetailSocieteComponent} from "./components/detail-societe/detail-societe.component";
import {DetailEquipeComponent} from "./components/detail-equipe/detail-equipe.component";
import {DetailEquipementComponent} from "./components/detail-equipement/detail-equipement.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import { SearchComponent } from './components/search/search.component';
import {FournisseurListComponent} from "./components/fournisseur-list/fournisseur-list.component";
import {CreateFournisseurComponent} from "./components/create-fournisseur/create-fournisseur.component";
import {DetailFournisseurComponent} from "./components/detail-fournisseur/detail-fournisseur.component";
import {UpdateFournisseurComponent} from "./components/update-fournisseur/update-fournisseur.component";
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from "./services/auth.service";
import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NgChartsModule } from 'ng2-charts';
import { EquipementCreateDialogComponent } from './components/equipement-create-dialog/equipement-create-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {DetailEmployeeComponent} from "./components/detail-employee/detail-employee.component";
import {DetailPanneComponent} from "./components/detail-panne/detail-panne.component";
import {DetailInterventionComponent} from "./components/detail-intervention/detail-intervention.component";
import { CategoryListComponent } from './components/category-list/category-list.component';
@NgModule({
  declarations: [
    AppComponent,
    BienListComponent,
    MainNavComponent,
    EquipementListComponent,
    UpdateBienComponent,
    CreatePanneComponent,
    CreateEquipementComponent,
    UpdateEquipementComponent,
    EquipeListComponent,
    CreateEquipeComponent,
    UpdateEquipeComponent,
    ArtisanListComponent,
    CreateSocieteComponent,
    UpdateSocieteComponent,
   ArtisanListComponent,
    CreateArtisanComponent,
    UpdateArtisanComponent,
    SocieteListComponent,
    AlertComponent,
    DetailBienComponent,
    DetailArtisanComponent,
    DetailSocieteComponent,
    DetailEquipeComponent,
    DetailEquipementComponent,
    SearchComponent,
    FournisseurListComponent,
    CreateFournisseurComponent,
    DetailFournisseurComponent,
    UpdateFournisseurComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    EquipementCreateDialogComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent,
    CreatePanneComponent,
    DetailPanneComponent,
    DetailInterventionComponent,
    CategoryListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    DataTablesModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    NgChartsModule,
    MatCheckboxModule,
    MatFormFieldModule,

    MatFormFieldModule





  ],
  providers: [ AuthService,{ provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
