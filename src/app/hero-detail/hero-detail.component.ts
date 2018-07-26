import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

// for routing
import { ActivatedRoute } from '@angular/router'; // get id from url
import { Location } from '@angular/common'; // Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
import { HeroService }  from '../hero.service'; // The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);

      // let someStr = "5";
      // console.log(+someStr);
  }

  goBack(): void {
    this.location.back();
  }
  
  ngOnInit():void {
    this.getHero();
  }

}
