import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Character } from '../models/character.models';

@Component({
  selector: 'navbar-component',
  styleUrls: ['../../app.component.css'],
  template: `
  <span>race:</span>
  <select #a (change)='onSelect(a.value, "race")'>
      <option value='any'> any </option>
      <option *ngFor='let race of raceList' value='{{race}}'>{{ race }}</option>
  </select>

  <button (click)='onGenerate()'> Generate ♥ </button>
  <hr>
  `
})
export class NavbarComponent implements OnInit {
    
    raceSelect: string[];
    ngOnInit(){
        this.raceSelect = this.raceList.concat(this.rareRaceList);
    }
    
    // GENERATE CHARACTER
    onGenerate(){
        this.generate.emit();
    }
    @Output()
    generate: EventEmitter<any> = new EventEmitter();
    

    onSelect(value: string, property: string){
        this.select.emit(value);
    }
    @Output()
    select: EventEmitter<any> = new EventEmitter();

    @Input()
    raceList: string[];

    @Input()
    rareRaceList: string[];

    @Input()
    selected: Character;

    

    
    
}
