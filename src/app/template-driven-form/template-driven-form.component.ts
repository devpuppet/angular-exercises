import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  contact!: Contact;

  countryList: Country[] = [
    new Country("1", "Poland"),
    new Country("2", "USA"),
    new Country("3", "Serbia")
  ];

  @ViewChild('contactForm') contactForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.setDefaults();
  }

  onSubmit(contactForm: any) {
    console.log('Contact Form: ', contactForm.value);
  }

  setDefaults() {
    this.contact = {
      firstname: "Kamil",
      lastname: "Kuk",
      email: "mail@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: { city: "Cracow", street: "Kolorowa", pincode: "12-345" }
    };

    setTimeout(() => {
      this.contactForm.controls['country'].setValue('1');
    });
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }

  patch() {
    const obj = {
      lastname: 'Kuk',
      email: 'mail@mail.com'
    }

    this.contactForm.control.patchValue(obj);
  }

  patchNested() {
    const obj = {
      city: 'Warsaw',
      street: 'Long',
      pincode: '99-999'
    }

    const address = this.contactForm.controls['address'] as FormGroup;
    address.patchValue(obj);
  }

}

export class Country {
  constructor(public id: string, public name: string) {}
}

export interface Contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
}