import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public counter: number = 10;

  contador(event: boolean){
    // this.counter += event ? 1 : -1;
    event ? this.counter += 1 :this.counter -= 1;
  }

  resetCounter(){
    this.counter = 10;
  }

}
