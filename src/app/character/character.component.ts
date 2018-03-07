import { Component, OnInit } from '@angular/core';

import { Character } from './models/character.models';
import { race } from 'q';

import { CharacterService } from './character.service';

@Component({
  selector: 'character',
  styleUrls:['./character.component.css'],
  template: `
  <navbar-component></navbar-component>
  <button (click)='getCharacter()'> Generate ♥ </button>

  <div *ngIf='character'>
      <div><h1>{{ character.name | titlecase }}</h1> </div>
      <div> <b>{{ character.race }}</b> </div>
      <div> <small>{{ character.gender }}, {{ character.libido }}</small> </div>
      <div> <small>{{ character.weight }}, {{ character.skin }}</small> </div>
      <p> {{ character.char }} </p>
      <table>
          <tr>
              <th>Ideal:</th>
              <td>{{ character.ideal }}</td>
          </tr>
          <tr>
              <th>Bond:</th>
              <td>{{ character.bond }}</td>
          </tr>
          <tr>
              <th>Flaw:</th>
              <td>{{ character.flaw }}</td>
          </tr>
      </table>
  </div>
  `
})
export class CharacterComponent implements OnInit {
    skintoneList: string[];
    weightList: string[];
    femaleNamesList: string[];
    maleNamesList: string[];
    raceList: string[];
    rareRaceList: string[];
    genderCisList: string[];
    genderQueerList: string[];
    libidoList: string[];
    characteristicsList: string[];
    idealsList: string[];
    bondsList: string[];
    flawsList: string[];
    
    constructor(private characterService: CharacterService){}
    ngOnInit(){
        this.skintoneList = this.characterService.getLists('skin');
        this.weightList = this.characterService.getLists('weight');
        this.femaleNamesList = this.characterService.getLists('femaleNames');
        this.maleNamesList = this.characterService.getLists('maleNames');
        this.raceList  = this.characterService.getLists('race');
        this.rareRaceList  = this.characterService.getLists('rareRace');
        this.genderCisList  = this.characterService.getLists('genderCis');
        this.genderQueerList  = this.characterService.getLists('genderQueer');
        this.libidoList  = this.characterService.getLists('libido');
        this.characteristicsList  = this.characterService.getLists('characteristic');
        this.idealsList  = this.characterService.getLists('ideal');
        this.bondsList  = this.characterService.getLists('bond');
        this.flawsList  = this.characterService.getLists('flaw');
    }

    
    character: Character;
    
    getCharacter(){
        let getGender: string = this.genderGen()
        this.character = {
            gender: getGender,
            name: this.nameGen(getGender),
            race: this.raceGen(),
            libido: this.libidoGen(),
            char: this.charGen(),
            ideal: this.idealGen(),
            bond: this.bondGen(),
            flaw: this.flawGen(),
            skin: this.skinGen(),
            weight: this.weightGen()
        }
    }

    randomNum(num: number): number {
        return Math.floor(Math.random() * (num - 0))
    }
    skinGen(): string {
        if (!this.skintoneList) return
        let skintone = this.skintoneList;
        let random = this.randomNum(skintone.length);
        return skintone[random] + ' skin color';
    }
    weightGen(): string {
        if (!this.weightList) return
        let weight = this.weightList;
        let random = this.randomNum(weight.length);
        return weight[random];
    }
    nameGen(gender: string){
        if (!this.femaleNamesList || !this.maleNamesList) return
        let femaleNames = this.femaleNamesList;
        let maleNames = this.maleNamesList;
        let list;

        if (gender == 'cis male') list = maleNames;
        else if (gender == 'cis female') list = femaleNames;
        else {
            let random = this.randomNum(100);
            if (random < 50) list = femaleNames;
            else list = maleNames;
        }
        
        let random = this.randomNum(list.length);

        return list[random];
    }
    raceGen(): string {
        if (!this.raceList || !this.rareRaceList) return
        let random = this.randomNum(20) + 1;
        let race = this.raceList;
        let rareRace = this.rareRaceList;
        let x;
        switch(random){
            case 1:
            case 2: 
                return race[0];
            case 3: 
                return race[1];
            case 4:
            case 5: 
            case 6:
            case 7:
            case 8:
            case 9:
                return race[2];
            case 10: 
            case 11:
            case 12:
            case 13:
            case 14:
                return race[3];
            case 15: 
            case 16:
            case 17:
            case 18:
            case 19:
                return race[4];
            case 20:
                random = this.randomNum(4);
                return rareRace[random];
            default:
                return race[2];
        }
    }
    genderGen() {
        if (!this.genderCisList || this.genderCisList.length < 1) return '...'
        let genderCis = this.genderCisList;
        let randomGender = this.randomNum(100);
        if (randomGender < 25) return genderCis[0];
        else if (randomGender >= 25 && randomGender < 50) return genderCis[1];
        else {
            if (!this.genderQueerList || this.genderQueerList.length < 1) return '...'
            let genderQueer = this.genderQueerList;
            randomGender = this.randomNum(4);
            return genderQueer[randomGender];
        }
    }
    libidoGen(): string {
        if (!this.libidoList || this.libidoList.length < 1) return '...'
        let libido = this.libidoList;
        let random = this.randomNum(libido.length);
        return libido[random];
    }
    charGen(): string {
        if (!this.characteristicsList || this.characteristicsList.length < 1) return '...'
        let characteristic = this.characteristicsList;
        let random = this.randomNum(characteristic.length);
        return characteristic[random];
    }
    idealGen(): string {
        if (!this.idealsList || this.idealsList.length < 1) return '...'
        let ideals = this.idealsList;
        let random = this.randomNum(ideals.length);
        return ideals[random];
    }
    bondGen(): string {
        if (!this.bondsList || this.bondsList.length < 1) return '...'
        let bonds = this.bondsList;
        let random = this.randomNum(bonds.length);
        return bonds[random];
    }
    flawGen(): string {
        if (!this.flawsList || this.flawsList.length < 1) return '...'
        let flaws = this.flawsList;
        let random = this.randomNum(flaws.length);
        return flaws[random];
    }
}
