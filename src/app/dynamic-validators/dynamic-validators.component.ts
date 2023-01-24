import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-validators',
  templateUrl: './dynamic-validators.component.html',
  styleUrls: ['./dynamic-validators.component.css']
})
export class DynamicValidatorsComponent {

  myForm: FormGroup;

  notifyOptions = ['Email', 'SMS'];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: new FormControl(''),
      mobile: new FormControl(''),
      notifyVia: new FormControl('', Validators.required),
    });

    this.myForm.get('notifyVia')?.valueChanges.subscribe(data => this.changeValidators())
  }

  changeValidators() {
    console.log('Notify via:', this.myForm.get('notifyVia')?.value);

    if (this.myForm.get("notifyVia")?.value === "Email") {
      this.myForm.controls["email"].setValidators([Validators.required, Validators.email]);
      this.myForm.controls["mobile"].clearValidators();
    } else {
      this.myForm.controls["email"].clearValidators();
      this.myForm.controls["mobile"].setValidators([Validators.required, Validators.minLength(10)]);
    }

    this.myForm.get("email")?.updateValueAndValidity();
    this.myForm.get("mobile")?.updateValueAndValidity();
  }

}
