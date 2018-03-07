import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  styleUrls: ['../../app.component.css'],
  template: `
  <span>race:</span>
  <select>
      <option>any</option>
      <option *ngFor='let race of raceList'>{{ race }}</option>
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

    onGenerate(){
        this.generate.emit();
    }

    @Input()
    raceList: string[];

    @Input()
    rareRaceList: string[];

    @Output()
    generate: EventEmitter<any> = new EventEmitter();

    
    
}
