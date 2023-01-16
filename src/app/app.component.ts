import { DatePipe, KeyValue, KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { filter, from, fromEvent, map, Observable, of, pipe, tap } from 'rxjs';
import { CounterComponent } from './counter/counter.component';
import { Customer } from './customer/model/customer';
import { CustomDecorator } from './decorators/decorator';
import { InitHookComponent } from './init-hook/init-hook.component';

@CustomDecorator({
  value: 'value from decorator'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
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
  hideShow = true;
  customer: Customer = {
    id: 1,
    name: 'Foo',
    city: 'Bar'
  };
  @ViewChild("parentTemp") templateFromChild!: TemplateRef<HTMLElement>;
  @ViewChild('heyButton') heyButton!: ElementRef;
  @ViewChild('heyInput', { static: false, read: NgModel}) inRef!: NgModel;
  @ViewChild('heyInput', { static: false, read: ElementRef}) elRef!: ElementRef;
  @ViewChild('heyInput', { static: false, read: ViewContainerRef}) vRef!: ViewContainerRef;
  @ViewChildren(CounterComponent) counters!: QueryList<CounterComponent>;
  showCounter = true;

  @ViewChild('example', { static: false }) exampleLabel!: ElementRef;
  @ViewChild('rendererDiv', { static: false }) rendererDiv!: ElementRef;
  @ViewChild('clickListen', { static: false }) listenButton!: ElementRef;
  clickListener: any;

  @ViewChild(InitHookComponent) hookComponent!: InitHookComponent;

  colorBlue = true;

  @ViewChild('btn', { static: false }) btn!: ElementRef;

  constructor(public http: HttpClient, public datePipe: DatePipe, private renderer: Renderer2, private keyValuePipe: KeyValuePipe) {}

  ngAfterViewInit(): void {
    console.log('template from child', this.templateFromChild);

    this.heyButton.nativeElement.innerHTML = 'InnerHTML from @ViewChild';
    console.log('inRef: ', this.inRef);
    console.log('elRef: ', this.elRef);
    console.log('vRef: ', this.vRef);

    this.counters.changes.subscribe(data => {
      console.log("ViewChildren changes subscribe: ", data);
    });

    // Renderer2
    this.renderer.setProperty(this.exampleLabel.nativeElement, 'innerHTML', 'Renderer2 example');
    this.renderer.setStyle(this.exampleLabel.nativeElement, 'color', 'red');
    this.clickListener = this.renderer.listen(this.listenButton.nativeElement, 'click', event => {
      this.appendNewDiv();
    });

    // Hooks
    console.log('AppComponent==>AfterViewInit');

    // RXJS
    this.buttonClick();
  }

  ngOnDestroy(): void {
    this.clickListener.unsubscribe();
  }

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

  toggleChildDisplay() {
    this.hideShow = !this.hideShow;
  }

  sayHello(firstName: HTMLInputElement, lastName: HTMLInputElement) {
    alert(`Hello ${firstName.value} ${lastName.value}!`);
  }

  show() {
    this.counters.forEach(counter => console.log('counter: ', counter));
  }

  showHideCounter() {
    this.showCounter = !this.showCounter;
    return this.showCounter;
  }

  removeBackgroundColor() {
    this.renderer.removeStyle(this.exampleLabel.nativeElement, 'background-color');
  }

  addBackgroundColor() {
    this.renderer.setStyle(this.exampleLabel.nativeElement, 'background-color', 'blue');
  }

  removeBoxClass() {
    this.renderer.removeClass(this.exampleLabel.nativeElement, 'box');
  }

  addBoxClass() {
    this.renderer.addClass(this.exampleLabel.nativeElement, 'box');
  }

  addStyleAttribute() {
    this.renderer.setAttribute(this.exampleLabel.nativeElement, 'style', 'font-size: 30px');
  }

  removeStyleAttribute() {
    this.renderer.removeAttribute(this.exampleLabel.nativeElement, 'style');
  }

  addText() {
    const text = this.renderer.createText('Text added by Renderer2');

    this.renderer.appendChild(this.exampleLabel.nativeElement, text);
  }

  appendNewDiv() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inserted after label');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.exampleLabel.nativeElement, div);
  }

  insertNewDivBeforeLabel() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inserted before label');
    this.renderer.appendChild(div, text);
    this.renderer.insertBefore(this.rendererDiv.nativeElement, div, this.exampleLabel.nativeElement);
  }

  createComment() {
    const comment = this.renderer.createComment('Comment from Renderer2');
    this.renderer.appendChild(this.exampleLabel.nativeElement, comment);
  }

  addDivBoxing() {
    const parent = this.renderer.parentNode(this.exampleLabel.nativeElement);
    this.renderer.addClass(parent, 'box');
  }

  addButtonsBoxing() {
    const sibling = this.renderer.nextSibling(this.exampleLabel.nativeElement);
    this.renderer.addClass(sibling, 'box');
  }

  removeAll() {
    this.renderer.selectRootElement(this.exampleLabel.nativeElement, false);
  }

  appendByRootElement() {
    const root = this.renderer.selectRootElement(this.exampleLabel.nativeElement, true);
    const text = this.renderer.createText('Added by root element');
    this.renderer.appendChild(root, text);
  }

  toggleStyle() {
    this.colorBlue = !this.colorBlue;
  }

  ngOnChanges() {
    console.log('AppComponent==>ngOnChanges');
  }
 
  ngOnInit() {
    console.log('AppComponent==>ngOnInit');

    // RXJS
    const observer = {
      next(value: any) {
        console.log(value);
      },
      error() {
        console.log('error');
      },
      complete() {
        console.log('completed');
      }
    };
    this.obs.subscribe(observer);
    this.obsUsingOf.subscribe(observer);
    this.obsUsingFrom.subscribe(observer);

    this.obsWithError.pipe(
      tap({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log('Tap error: ', err);
        }
      }
    ))
    .subscribe();
  }
 
  ngDoCheck() {
    console.log('AppComponent==>ngDoCheck');
  }
 
  ngAfterContentInit() {
    console.log('AppComponent==>ngAfterContentInit');
  }
 
  ngAfterContentChecked() {
    console.log('AppComponent==>ngAfterContentChecked');
  }
 
  ngAfterViewChecked() {
    console.log('AppComponent==>AfterViewChecked');
  }

  // Observables
  private customOperator = pipe(
    tap(data => console.log('tap: ', data)),
    filter((data: any) => data > 2),
    tap(data => console.log('tap: ', data)),
    map((val, index) => {
      console.log('index: ', index);
      return val * 2;
    }),
  );

  private obs = new Observable<number>((observer) => {
    console.log('Observable starts');
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
    setTimeout(() => observer.complete(), 5500);
  }).pipe(
    this.customOperator
  );

  private obsWithError = new Observable<string>(observer => {
    observer.next('A');
    observer.next('B');
    observer.next('C');
    observer.error('Error occured!');
    observer.next('D');
    observer.next('E');
  });

  private obsUsingOf = of(1,['hi!', 9, { name: 'Kamil' }], "foo!");
  private obsUsingFrom = from([1, 'a', 2, 'b'])
  private buttonSubscription: any
  private $dogsBreed(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breeds/list/all');
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.btn.nativeElement, 'click')
    .subscribe(res => console.log('fromEvent: ', res));
  }

  getDogsBreed() {
    this.$dogsBreed()
    .pipe(
      tap(data => console.log(data)),
      map(data => {
        const dogs = this.keyValuePipe.transform(data.message);
        console.log('Breeds: ', dogs)
      })
    )
    .subscribe();
  }
}

class Item {
  constructor(public readonly name: string) {}
}

class StyleClass {
  'color' = 'purple';
  'font-size.px' = 20;
}