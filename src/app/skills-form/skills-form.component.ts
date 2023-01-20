import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {

  skillsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.skillsForm = this.formBuilder.group({
      name: '',
      // skills: formBuilder.array([this.formBuilder.group({ skill: 'Swimming', exp: '100' })])
      skills: formBuilder.array([])
    })
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      exp: ''
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log('skills form:', this.skillsForm.value);
  }

  ngOnInit(): void {
    console.log('Skills:', this.skills.controls);
  }

}
