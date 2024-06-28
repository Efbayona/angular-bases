import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbzRoutingModule } from './dbz-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    DbzRoutingModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
