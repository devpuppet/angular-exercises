import { Component } from '@angular/core';
import { DeactivateComponent } from '../models/guards';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DeactivateComponent {

  constructor() { }

  ngOnInit(): void {
  }

  canExit() {
    if (confirm('Do you wish to leave the page?')) {
      return true;
    } else {
      return false;
    }
  }
}
