import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {


  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  

  selectedHero: Hero;

  onSelect(hero: Hero): void {

    this.selectedHero = hero;

  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };





}
