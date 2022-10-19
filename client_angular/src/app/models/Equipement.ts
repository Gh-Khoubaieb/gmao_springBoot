import {Panne} from "./Panne";

export class Equipement {
  id: number;
  codeEquipement: number;
     statut: string;
  criticite : string;
   tagQr : string;
  type: string;
  photo: string;
 docUrl: string;
  noSerie: string;
  classe: string;
  barCode: string;
  nom: string;
  pannes: Panne
}
