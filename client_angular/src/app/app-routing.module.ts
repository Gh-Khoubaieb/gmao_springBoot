import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienListComponent} from "./components/bien-list/bien-list.component";
import {EquipementListComponent} from "./components/equipement-list/equipement-list.component";
import {UpdateBienComponent} from "./components/update-bien/update-bien.component";
import {CreatePanneComponent} from "./components/create-bien/create-panne.component";
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
import {SocieteListComponent} from "./components/societe-list/societe-list.component";
import {DetailBienComponent} from "./components/detail-bien/detail-bien.component";
import {DetailArtisanComponent} from "./components/detail-artisan/detail-artisan.component";
import {DetailSocieteComponent} from "./components/detail-societe/detail-societe.component";
import {DetailEquipeComponent} from "./components/detail-equipe/detail-equipe.component";
import {DetailEquipementComponent} from "./components/detail-equipement/detail-equipement.component";
import {FournisseurListComponent} from "./components/fournisseur-list/fournisseur-list.component";
import {CreateFournisseurComponent} from "./components/create-fournisseur/create-fournisseur.component";
import {DetailFournisseurComponent} from "./components/detail-fournisseur/detail-fournisseur.component";
import {UpdateFournisseurComponent} from "./components/update-fournisseur/update-fournisseur.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {DetailEmployeeComponent} from "./components/detail-employee/detail-employee.component";
import {DetailPanneComponent} from "./components/detail-panne/detail-panne.component";
import {DetailInterventionComponent} from "./components/detail-intervention/detail-intervention.component";
import {CategoryListComponent} from "./components/category-list/category-list.component";

const routes: Routes = [
  {path: 'biens', component: BienListComponent},
  {path: '', redirectTo: 'biens', pathMatch: 'full'},
  {path: 'update-bien/:id', component: UpdateBienComponent},
  {path: 'biens/create-bien', component: CreatePanneComponent},
  {path: 'biens/detail-bien/:id', component: DetailBienComponent},

  {path: 'biens/detail-bien/:id/detail-equipements/:id', component: DetailEquipementComponent},

  {path: 'equipements', component: EquipementListComponent},
  {path: 'equipements/create-equipement', component: CreateEquipementComponent},
  {path: 'update-equipement/:id', component: UpdateEquipementComponent},
  {path: 'equipements/detail-equipement/:id', component: DetailEquipementComponent},

  {path: 'equipes', component: EquipeListComponent},
  {path: 'equipes/create-equipe', component: CreateEquipeComponent},
  {path: 'equipes/detail-equipe/:id', component: DetailEquipeComponent},
  {path: 'update-equipe/:id', component: UpdateEquipeComponent},

  {path: 'societes', component: SocieteListComponent},
  {path: 'societes/create-societe', component: CreateSocieteComponent},
  {path: 'societes/detail-societe/:id', component: DetailSocieteComponent},
  {path: 'update-societe/:id', component: UpdateSocieteComponent},

  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/create-employee', component:CreateEmployeeComponent},
  {path: 'employees/detail-employee/:id', component: DetailEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},

  {path: 'fournisseurs', component: FournisseurListComponent},
  {path: 'fournisseurs/create-fournisseur', component: CreateFournisseurComponent},
  {path: 'fournisseurs/detail-fournisseur/:id', component: DetailFournisseurComponent},
  {path: 'update-fournisseur/:id', component: UpdateFournisseurComponent},

  {path: 'biens/detail-bien/:id/detail-equipements/:id', component: CreatePanneComponent},

  {path: 'biens/detail-bien/:id/detail-equipements/:id/detail-pannes/:id', component: DetailPanneComponent},

  {path: 'biens/detail-bien/:id/detail-equipements/:id/detail-pannes/:id/detail-interventions/:id', component: DetailInterventionComponent},

  {path: 'login', component: LoginComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},

  {path: 'categories', component: CategoryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
