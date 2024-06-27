import {Component} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizeName(): string {
    return 'Hola Mundo'.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    let heroes = ["Superman", "Batman", "Wonder Woman", "Spiderman", "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Aquaman"];
    let min = 0;
    let max = 9;
    let numb = Math.floor(Math.random() * (max - min + 1)) + min;
    this.name = heroes[numb]
  }

  changeAge(): void {
    let ages = [10, 20, 25, 30, 32, 44, 27, 64, 22, 18];
    let min = 0;
    let max = 9;
    let numb = Math.floor(Math.random() * (max - min + 1)) + min;
    this.age = ages[numb]
  }

  reset(){

    document.querySelectorAll('h1').forEach( element =>{
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }

}
