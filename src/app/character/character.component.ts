import { Component, OnInit } from '@angular/core';

import { Character } from './models/character.models';
import { race } from 'q';

import { CharacterService } from './character.service';

@Component({
  selector: 'character',
  styleUrls:['./character.component.css'],
  template: `
  <navbar-component 
  (generate)='getCharacter()'
  [raceList]='this.raceList'
  [rareRaceList]='this.rareRaceList'
  (selectRace)='getSelectedRace($event)'
  (selectName)='getSelectedName($event)'></navbar-component>

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
    raceList: string[];
    rareRaceList: string[];
    genderCisList: string[];
    genderQueerList: string[];
    libidoList: string[];
    characteristicsList: string[];
    idealsList: string[];
    bondsList: string[];
    flawsList: string[];
    namesList;
    
    constructor(private characterService: CharacterService){}
    ngOnInit(){
        this.skintoneList = this.characterService.getLists('skin');
        this.weightList = this.characterService.getLists('weight');
        this.raceList  = this.characterService.getLists('race');
        this.rareRaceList  = this.characterService.getLists('rareRace');
        this.genderCisList  = this.characterService.getLists('genderCis');
        this.genderQueerList  = this.characterService.getLists('genderQueer');
        this.libidoList  = this.characterService.getLists('libido');
        this.characteristicsList  = this.characterService.getLists('characteristic');
        this.idealsList  = this.characterService.getLists('ideal');
        this.bondsList  = this.characterService.getLists('bond');
        this.flawsList  = this.characterService.getLists('flaw');
        this.namesList = {
            human: {
                male: this.characterService.getLists('humanMaleNames'),
                female: this.characterService.getLists('humanFemaleNames')
            },
            elf: {
                male: this.characterService.getLists('elfMaleNames'),
                female: this.characterService.getLists('elfFemaleNames')
            },
            orc: {
                male: this.characterService.getLists('orcMaleNames'),
                female: this.characterService.getLists('orcFemaleNames')
            }
        }
    }

    
    character: Character;
    
    selectedRace: string = 'any';
    selectedName: string = 'any';

    getCharacter(){
        let getGender: string = this.genderGen()

        // if RACE selected in navbar
        let race;
        if (this.selectedRace == 'any') race = this.raceGen();
        else { race = this.selectedRace }

        // if NAME selected in navbar
        let name;
        if (this.selectedName == 'any') name = this.nameGen(getGender, 'any');
        else { name = this.nameGen(getGender, this.selectedName) }

        this.character = {
            gender: getGender,
            name: name,
            race: race,
            libido: this.libidoGen(),
            char: this.charGen(),
            ideal: this.idealGen(),
            bond: this.bondGen(),
            flaw: this.flawGen(),
            skin: this.skinGen(),
            weight: this.weightGen()
        }
    }

    getSelectedRace(event){
        this.selectedRace = event;
    }
    getSelectedName(event){
        this.selectedName = event;
        console.log(this.selectedName);
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
    nameGen(gender: string, raceName: string){
        if (!this.namesList) return
        let list;

        // chooses name according to race
        if (raceName == 'any') list = this.namesList.human;
        else if (raceName == 'Elf') list = this.namesList.elf;
        else if (raceName == 'Orc') list = this.namesList.orc;
        else return;
        
        // chooses name according to gender
        if (gender == 'cis male') list = list.male;
        else if (gender == 'cis female') list = list.female;
        else {
            let random = this.randomNum(100);
            if (random < 50) list = list.female;
            else list = list.male;
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
    genderGen(): string {
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
