import { DatePipe, KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly firstName = 'Kamil';
  protected readonly lastName = 'Kukiełka';
  title = () => `${this.firstName} ${this.lastName}`;
  color = "green";
  protected readonly items = [new Item('Is'), new Item('Angular'), new Item('So'), new Item('Cool?')];
  protected specificItem: Item | undefined;
  protected anotherSpecificItem: Item | undefined = new Item('Wow!');
  isDisabled = true;
  catUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none";
  catWidth = 200;
  catHeight = 150;
  closeLabel = "Close!";
  inputValue = '';
  name2 = 'Basic name';
  name3 = 'More basic name';
  @Input() count = 0;
  number = '';
  ngIfCondition = true;
  isNumberOdd!: boolean;
  cssObject = {
    bigText: true,
    blueText: true
  };
  styleExample = '';
  fontSize = 16;
  styleClass = new StyleClass();
  customIf = true;
  toDate = new Date();
  decimalNumber = 123483.32123;
  percentNumber = 0.45;
  fahrenheit = 0;
  celsius = 0;
  hounds: Observable<any> = this.getHoundList();
  randomImage: Observable<any> = this.getRandomBreedImage();
  keyValueObject = {
    b: 123,
    c: 'some text',
    a: [1, 2, 3]
  }
  orderByKeyDesc = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.key > b.key ? -1 : 1;
  }
  today = this.datePipe.transform(new Date(), 'short');
  @ViewChild(CounterComponent) counterChildComponent!: CounterComponent;

  constructor(public http: HttpClient, public datePipe: DatePipe) {}

  public closeMe() {
    console.log('Close button clicked!');
  }

  public closeMeAgain() {
    console.log('Second method triggered!');
  }

  public doSomething(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log(`Event payload: ${(event.target as HTMLInputElement).value}`);
  }

  public doSomethingElse(element: HTMLInputElement) {
    this.inputValue = element.value;
    console.log(`Template reference variable: ${element.value}`);
  }

  clearName() {
    this.name2= '';
  }

  nameChanged(event: Event) {
    console.log("nameChanged() event: ", event);
  }

  handleChange(event: Event) {
    console.log("'change' event has been fired", event);
  }

  isOdd(event: HTMLInputElement): boolean {
    return +event.value % 2 === 0;
  }

  obsValue = new Observable(observer => {
    console.log('Observable starts');
    setTimeout(() => { observer.next("This is the response") }, 3000);
  });

  getHoundList(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breed/hound/list');
  }

  getRandomBreedImage(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

  callMethodFromChild() {
    return this.counterChildComponent.increment();
  }
}

class Item {
  constructor(public readonly name: string) {}
}

class StyleClass {
  'color' = 'purple';
  'font-size.px' = 20;
}