import { Component } from '@angular/core';
import { DeactivateComponent } from '../models/guards';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DeactivateComponent {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  canExit() {
    if (confirm('Do you wish to leave the page?')) {
      return true;
    } else {
      return false;
    }
  }

  // Use Location Services, only when you need to manipulate the Router, without resulting in a page refresh.
  goBack() {
    this.location.back();
  }
}
