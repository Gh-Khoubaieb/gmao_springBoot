import {Equipement} from "./Equipement";

export class Bien {
  id : number ;
  adresse: string  ;
  disponibilite: string ;
  codePostal : string ;
  region: string ;
  type: string;
  nom: string;
  telephone: number;
  equipements: Equipement ;
}
