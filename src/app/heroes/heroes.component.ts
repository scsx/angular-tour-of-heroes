import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
//import { MOCKHEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  // wihout service
  // heroes = MOCKHEROES;
  // wih service
  heroes: Hero[];
  
  constructor(private heroService: HeroService) {}

  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
