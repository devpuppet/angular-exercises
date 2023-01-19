import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList: Country[] = [
    new Country("1", "Poland"),
    new Country("2", "USA"),
    new Country("3", "Serbia")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    console.log('Contact Form: ', contactForm.value);
  }

}

export class Country {
  constructor(public id: string, public name: string) {}
}