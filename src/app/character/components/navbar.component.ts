import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Character } from '../models/character.models';

@Component({
  selector: 'navbar-component',
  styleUrls: ['../../app.component.css'],
  template: `
  <span>race:</span>
  <select #r (change)='onSelect(r.value)'>
      <option value='any'> any </option>
      <option *ngFor='let race of raceSelect' value='{{race}}'>{{ race }}</option>
  </select>

  <span>name:</span>
  <select #n (change)='onSelectName(n.value)'>
      <option value='any'> any </option>
      <option *ngFor='let name of raceNames' value='{{ name }}'>{{ name }}</option>
  </select>

  <button (click)='onGenerate()'> Generate ♥ </button>
  <hr>
  `
})
export class NavbarComponent implements OnInit {
    @Input()
    raceList: string[];

    @Input()
    rareRaceList: string[];

    raceSelect: string[];
    raceNames;

    ngOnInit(){
        this.raceSelect = this.raceList.concat(this.rareRaceList);
        this.raceNames = ['Elf', 'Orc'];
    }
    
    // GENERATE CHARACTER
    @Output()
    generate: EventEmitter<any> = new EventEmitter();
    onGenerate(){
        this.generate.emit();
    }
    
    // GET SELECTED RACE
    @Output()
    selectRace: EventEmitter<any> = new EventEmitter();
    onSelect(value: string){
        this.selectRace.emit(value);
    }

    // GET SELECTED NAME
    @Output()
    selectName: EventEmitter<any> = new EventEmitter();
    onSelectName(value: string){
        this.selectName.emit(value);
    }
    
}
