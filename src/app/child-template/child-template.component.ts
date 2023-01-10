import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrls: ['./child-template.component.css']
})
export class ChildTemplateComponent implements OnInit {

  @Input() customTemplate!: TemplateRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
  }

}
