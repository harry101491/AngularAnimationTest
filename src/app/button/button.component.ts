import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @HostBinding("style.width.px")
  // @Input()
  // boxWidth: number;

  // time: string;
  constructor() {
    // this.boxWidth = 120;
  }

  ngOnInit() {
  }

  // onClick(target) {
  //   console.log(target);
  // }

  // @HostListener("click", ["$event.target"])
  // onClick(target) {
  //   console.log(target);
  //   this.time = new Date().toString();
  // }

  // host: {
  //   "[style.width.px]": "boxWidth"
  // }
}
