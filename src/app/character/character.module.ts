import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CharacterComponent } from './character.component';
import { NavbarComponent } from './components/navbar.component';

import { CharacterService } from './character.service';


@NgModule({
  declarations: [
    CharacterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CharacterService],
  exports: [CharacterComponent]
})
export class CharacterModule { }
