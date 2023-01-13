import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-component',
  templateUrl: './shadow-dom-component.component.html',
  styleUrls: ['./shadow-dom-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
