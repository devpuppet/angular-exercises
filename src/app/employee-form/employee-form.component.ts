import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      employees: this.formBuilder.array([])
    })
  }

  employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.formBuilder.group({
      firstName: '',
      lastName: '',
      skills: this.formBuilder.array([])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(index: number) {
    this.employees().removeAt(index);
  }

  employeeSkills(index: number): FormArray {
    return this.employees().at(index).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      exp: ''
    });
  }

  addEmployeeSkill(index: number) {
    this.employeeSkills(index).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log('Emp form:', this.employeeForm.value);
  }

  ngOnInit(): void {
  }

}
