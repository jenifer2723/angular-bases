import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string= 'ironman';
  public age: number= 45;

get capitalizedName(): string{
  return this.name.toUpperCase();
}
// esto e sun metodo para juntar el name y el age
 getHeroDescription():string{
  return `${this.name} - ${this.age}`;
 }
changeHero() :void{
  this.name = 'spiderman'

  }

  changeAge():void {
    this.age = 28;
  }

  resetForm():void{
    this.name= 'ironman';
    this.age= 45;
    //document.querySelectorAll('h1')!. forEach(element =>{
      //element.innerHTML = '<h1>Desde Angular</h1>';
   // })

}
}



