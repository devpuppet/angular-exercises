import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  contactForm!: FormGroup;
  countries = [
    { id: 1, name: 'Poland' },
    { id: 2, name: 'US' },
    { id: 3, name: 'Serbia' }
  ];
  valueChanges$!: Subscription;
  countryName = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      country: [1]
    })

    this.valueChanges$ = this.contactForm.get('country')!.valueChanges.subscribe(val => console.log('Country value changed:', val));
  }

  ngOnDestroy(): void {
    this.valueChanges$.unsubscribe();
  }

  submit() {
    console.log('Contact Form:', this.contactForm.value);
  }

  addCountry() {
    const country = this.countries.find(el => el.name === this.countryName);

    if (!country) {
      let id = Math.max.apply(Math, this.countries.map(obj => obj.id));
      this.countries.push({ id: id + 1, name: this.countryName });
      this.countryName = '';
    }
  }

}
