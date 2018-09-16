import { Component, OnInit, Input } from '@angular/core';

// Importing Animation functions
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

import { Hero } from "../../service/hero.service";

@Component({
  selector: 'app-hero-basic',
  templateUrl: './hero-basic.component.html',
  styleUrls: ['./hero-basic.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HeroBasicComponent implements OnInit {

  @Input() heros: Hero[];

  constructor() { }

  ngOnInit() {
  }

  animationStart(event) {
    console.log("Event at Start: ", event);
  }

  animationEnd(event) {
    console.log("Event at End: ", event);
  }
}

// trigger('heroState', [
  //   state('inactive', style({transform: 'translateX(0) scale(1)'})),
  //   state('active',   style({transform: 'translateX(0) scale(1.1)'})),
  //   transition('inactive => active', animate('100ms ease-in')),
  //   transition('active => inactive', animate('100ms ease-out')),
  //   transition('void => inactive', [
  //     style({transform: 'translateX(-100%) scale(1)'}),
  //     animate(100)
  //   ]),
  //   transition('inactive => void', [
  //     animate(100, style({transform: 'translateX(100%) scale(1)'}))
  //   ]),
  //   transition('void => active', [
  //     style({transform: 'translateX(0) scale(0)'}),
  //     animate(200)
  //   ]),
  //   transition('active => void', [
  //     animate(200, style({transform: 'translateX(0) scale(0)'}))
  //   ])
  // ])

// trigger('flyInOut', [
//   state('in', style({transform: 'translateX(0)'})),
//   transition('void => *', [
//     style({transform: 'translateX(-100%)'}),
//     animate(100)
//   ]),
//   transition('* => void', [
//     animate(100, style({transform: 'translateX(100%)'}))
//   ])
// ])

// trigger("heroState", [
//   state("inactive", style({
//     backgroundColor: '#eee',
//     transform: 'scale(1)'
//   })),
//   state("active", style({
//     backgroundColor: '#cfd8dc',
//     transform: 'scale(1.1)'
//   })),
//   transition("inactive => active", animate("100ms ease-in")),
//   transition("active => inactive", animate("100ms ease-out"))
// ])


