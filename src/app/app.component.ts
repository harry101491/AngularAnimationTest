import {
  Component,
  OnInit
} from '@angular/core';

import { HeroService, Hero } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  heros: Hero[];

  constructor(
    private _heroService: HeroService
  ) {
    this.heros = this._heroService.heroes;
  }

  ngOnInit() {
  }
}
