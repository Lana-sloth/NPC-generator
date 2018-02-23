import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CharacterComponent } from './character.component';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [CharacterComponent]
})
export class CharacterModule { }
