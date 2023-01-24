import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../validators/multi-field-validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  mainForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirm: ["", [Validators.required]]
    }, { validators: matchPassword('password', 'confirm') });
  }

  ngOnInit(): void {
  }

}
