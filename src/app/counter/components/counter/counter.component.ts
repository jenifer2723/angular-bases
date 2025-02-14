import { Component } from "@angular/core";

@Component({                         // esto es un decorador q transforma mi class en un componente
    selector: 'app-counter',
    template: `
  <h3> counter:{{counter}} </h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset </button>
  <button (click)="decrementBy(-1)">-1</button>
    `,
    standalone: false
})
export class CounterComponent{
  public counter :number =10;
  increaseBy(value:number): void{
    this.counter +=1    //queremos q incremente l valor de 10 en 1
  }
  decrementBy(value:number):void{  //decrementa el valor de 10
    this.counter -=1
  }

  reset(){          // LO VUELVE A PONER EN 10
 this.counter =10;

  }

}


