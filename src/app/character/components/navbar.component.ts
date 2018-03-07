import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-component',
  styleUrls: ['../../app.component.css'],
  template: `
  <button (click)='onGenerate()'> Generate ♥ </button>
  <hr>
  `
})
export class NavbarComponent {
    @Output()
    generate: EventEmitter<any> = new EventEmitter();

    onGenerate(){
        this.generate.emit();
    }
}
