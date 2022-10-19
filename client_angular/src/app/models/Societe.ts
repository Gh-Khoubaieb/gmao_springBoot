import {Fournisseur} from "./Fournisseur";

export class Societe {
  id : number ;
  adresse: string  ;
  site: string ;
  codePostal : string ;
  description: string ;
  nom: string;
  telephone: number;
  fournisseurs: Fournisseur
}
