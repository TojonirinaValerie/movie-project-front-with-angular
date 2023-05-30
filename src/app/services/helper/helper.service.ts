import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public sizeUnite = [
    { value: "Octets", acc: "O" },
    { value: "MegaOctets", acc: "Mo" },
    { value: "GigaOctets", acc: "Go" },
  ];

  constructor() { }

  playtimeStringToString(playtimeString: string){

    const tab = playtimeString.split(':');
    return `${tab[0]}h ${tab[1]}m ${tab[2]}s` ;

  }

  sizeOctetToString(size: number){

    let taille = size;
    let unite = 0;
    while(taille>1024){
      
      taille /= 1024;
      unite ++;
      if(unite>2) break;
    }

    return `${taille.toFixed(2)}${this.sizeUnite[unite-1].acc}`;

  }

}
