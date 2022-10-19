import {Intervention} from "./Intervention";


export class Panne {
  id : number ;
  description: string  ;
  priorite: string ;
  date : number ;
  heure: number ;
  type: string;
  code: string;
  frequence: number;
  interventions: Intervention

}
