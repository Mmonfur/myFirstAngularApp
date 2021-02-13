import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  };
  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService
  ) {

    this.listObservable = hService.getAll();

   /*  this.hService.getAll().forEach( value => {
      console.log("All Hero: ", value);
    });

    this.hService.getOne(1).forEach( value => {
      console.log("First Hero: ", value);
    });

    this.hService.add({id: 10, name: "Jack", address: "Bp", superpower: "biking"})
      .forEach( value => {
        console.log("Added Hero", value);
      });
  
    this.hService.update({id: 1, name: "Lucy", address: "Bp", superpower: "biking"}).forEach( value => {
      console.log("Updated Hero: ", value);
    });
  
    this.hService.remove(2).forEach( value => {
      console.log("Deleted Hero: ", value);
    });
 */
  }
  setHero(hero: Hero): void {
    this.myHero = hero;
  }
}
