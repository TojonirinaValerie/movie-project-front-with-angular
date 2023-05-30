import { Injectable } from '@angular/core';
import configs from 'src/app/json/configs.json';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getURLServeurFile(numPC: number, numDisc: number){

    let url: string = '';

    if(numPC == 1) url += configs.numPC.PC1;
    if(numPC == 2) url += configs.numPC.PC2;

    if(numDisc == 1) url += `:${configs.numDisc.disc1}`;
    if(numDisc == 2) url += `:${configs.numDisc.disc2}`;

    if(numPC == 1 && numDisc == 1) url += `/${configs.folderName.PC1_Disc1}`;
    if(numPC == 1 && numDisc == 2) url += `/${configs.folderName.PC1_Disc2}`;
    if(numPC == 2 && numDisc == 1) url += `/${configs.folderName.PC2_Disc1}`;
    if(numPC == 2 && numDisc == 2) url += `/${configs.folderName.PC2_Disc2}`;

    return url;

  }

}
