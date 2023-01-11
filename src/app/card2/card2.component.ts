import { AfterContentInit, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements AfterContentInit {

  @ContentChild('header') headerContent!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    this.renderer.setStyle(this.headerContent.nativeElement, 'font-size', '20px');
  }

}
