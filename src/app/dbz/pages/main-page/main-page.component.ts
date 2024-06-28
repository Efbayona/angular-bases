import {Component} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {DbzService} from "../../services/dbz.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(public dbz: DbzService) {
  }


}
