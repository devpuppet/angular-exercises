import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  defaultImage = 'https://www.placecage.com/1000/1000';
  images = `https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/pass/1521-WIRED-Cat.jpeg 1200w,https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`;

  constructor() { }
}
