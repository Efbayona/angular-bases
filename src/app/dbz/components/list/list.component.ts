import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Output() indexCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]

  onDeleteCharacter(id: string | undefined) {
    if (id !== undefined) {
      this.indexCharacter.emit(id);
    } else {
      return;
    }
  }

}
