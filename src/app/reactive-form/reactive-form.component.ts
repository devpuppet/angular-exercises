import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('Kuk'),
    email: new FormControl({ value: 'mail@example.com', disabled: true }),
    gender: new FormControl(),
    isMarried: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl(),
      country: new FormControl(),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Reactive form: ', this.contactForm.value);
  }

}
