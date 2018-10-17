import {
  Component,
  OnInit
} from '@angular/core';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   keyframes
// } from "@angular/animations";

import { Validators, FormArray, FormGroup, FormBuilder } from "@angular/forms";

import { Customer } from "./models/customer.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._formBuilder.array([
        this.initAddress()
      ])
    });
  }

  initAddress() {
    return this._formBuilder.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  save(model: Customer) {
    // call API to save customer
    console.log(model);
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls["addresses"];
    control.push(this.initAddress());
  }

  removeAddress(index: number) {
    const control = <FormArray>this.myForm.controls["addresses"];
    control.removeAt(index);
  }
}

// state = "normal";
// list = ['Milk', 'Sugar', 'Bread'];

// onAdd(item) {
//   this.list.push(item);
// }

// onDelete(item) {
//   this.list.splice(this.list.indexOf(item), 1);
// }

// onAnimate() {
//   this.state = this.state === "normal" ? "highlight" : "normal";
// }

// animations: [
//   trigger("divState", [
//     state("normal", style({
//       "background-color": "red",
//       transform: "translateX(0)"
//     })),
//     state("highlight", style({
//       "background-color": "blue",
//       transform: "translateX(100%)"
//     })),
//     transition("normal => highlight", animate(300)),
//     transition("highlight => normal", animate(800))
//   ])
// ]
