import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {

  _count: number = 0;

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    for (const property in changes) {
      if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
  }

  @Input()
  set count(count: number) {
    this._count = count;
    console.log('From @Input setter: ', count);
  }

  get count(): number {
    return this._count;
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
