import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding("style.border") border!: string
  @HostBinding('class.highlight') get hasHighlight() { return true; }
  @HostBinding('class.box') get hasBox() { return true; }

  constructor() { }

  ngOnInit(): void {
    this.border = "5px solid blue";
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.border = "5px solid green";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.border = '';
  }

}
