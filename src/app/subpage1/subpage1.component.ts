import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-subpage1',
  templateUrl: './subpage1.component.html',
  styleUrls: ['./subpage1.component.css'],
  // default mode, ensures that the component styles do not bleed out to other components 
  encapsulation: ViewEncapsulation.Emulated
})
export class Subpage1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
