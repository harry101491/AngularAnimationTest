import {
  Component,
  OnInit
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("divState", [
      state("normal", style({
        "background-color": "red",
        transform: "translateX(0)"
      })),
      state("highlight", style({
        "background-color": "blue",
        transform: "translateX(100%)"
      })),
      transition("normal => highlight", animate(300)),
      transition("highlight => normal", animate(800))
    ])
  ]
})
export class AppComponent implements OnInit {

  state = "normal";
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = this.state === "normal" ? "highlight" : "normal";
  }

  ngOnInit() {

  }
}
