import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // this is one way to create a form
  // contactForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   lastname: new FormControl('Kuk'),
  //   email: new FormControl({ value: 'mail@example.com', disabled: true }),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   address:new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //     pincode:new FormControl(),
  //     country: new FormControl(),
  //   })
  // });
  contactForm: FormGroup;

  //another way to create a form is via FormBuilder
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]]
      })
    })
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Reactive form: ', this.contactForm.value);
  }

}
