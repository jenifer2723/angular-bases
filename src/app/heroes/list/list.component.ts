import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,


  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deleteHero?: string;

  removeLastHero(): void {
  this.deleteHero =  this.heroNames.pop();

  }

}
