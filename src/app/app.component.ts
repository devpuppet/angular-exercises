import { DatePipe, KeyValue, KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { AsyncSubject, BehaviorSubject, catchError, concatMap, debounce, debounceTime, delay, delayWhen, exhaustMap, filter, first, forkJoin, from, fromEvent, interval, last, map, mergeMap, Observable, of, pipe, range, reduce, ReplaySubject, retry, scan, single, skip, skipLast, skipUntil, skipWhile, Subject, Subscription, switchMap, take, takeLast, takeUntil, takeWhile, tap, throwError, timer } from 'rxjs';
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
    this.formObservable.unsubscribe();
    this.form2Observable.unsubscribe();
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

    this.sourceObs.pipe(
      switchMap(value => {
        console.log('Source value', value);
        console.log('Starting new observable');
        return this.innerObs;
      })
    )
    .subscribe(console.log);

    of("hound", "mastiff", "retriever")
    .pipe(
      // mergeMap doesn't keep the order
      mergeMap(breed => {
        const breedDetailUrl = 'https://dog.ceo/api/breed/' + breed + '/list';
        const imageUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random';

        const breedDetailObs = this.http.get<any>(breedDetailUrl);
        const imageObs = this.http.get<any>(imageUrl);

        return forkJoin([breedDetailObs, imageObs]);
      })
    )
    .subscribe(data => console.log('dogs mergeMap: ', data.map(val => val.message)));

    of("hound", "mastiff", "retriever")
    .pipe(
      // concatMap keeps the order
      concatMap(breed => {
        const breedDetailUrl = 'https://dog.ceo/api/breed/' + breed + '/list';
        const imageUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random';

        const breedDetailObs = this.http.get<any>(breedDetailUrl);
        const imageObs = this.http.get<any>(imageUrl);

        return forkJoin([breedDetailObs, imageObs]);
      })
    )
    .subscribe(data => console.log('dogs concatMap: ', data.map(val => val.message)));

    of("hound", "mastiff", "retriever")
    .pipe(
      // exhaustMap always waits for inner observable to finish ignoring incoming values
      exhaustMap(breed => {
        const breedDetailUrl = 'https://dog.ceo/api/breed/' + breed + '/list';
        const imageUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random';

        const breedDetailObs = this.http.get<any>(breedDetailUrl);
        const imageObs = this.http.get<any>(imageUrl);

        return forkJoin([breedDetailObs, imageObs]);
      })
    )
    .subscribe(data => console.log('dogs exhaustMap: ', data.map(val => val.message)));

    of(1, 2, 3, 4, 5)
    .pipe(
      // takes only first 2 values
      take(2)
    )
    .subscribe(value => console.log('take: ', value))

    of(1, 2, 3, 2, 1, 3, 2, 1)
    .pipe(
      // discards the rest of the stream if receives a value that doesn't pass the predicate
      takeWhile(value => value < 3)
    )
    .subscribe(value => console.log('takeWhile: ', value));

    range(0, 100)
    .pipe(
      //waits for the source to complete, then emits last n values
      takeLast(3)
    )
    .subscribe(val => console.log('takeLast: ', val));

    of(1,2,3).pipe(first(val => val > 2)).subscribe(val => console.log('first > 2: ', val));
    of(1,2,3).pipe(first(val => val > 10)).subscribe({
      next(value: any) {
        console.log('first > 10: ', value);
      },
      error(err: any) {
        console.log('first > 10 error: ', err);
      }
    });
    of(1,2,3).pipe(first(val => val > 10, 50)).subscribe(val => console.log('first > 10, default 50: ', val));

    of(1,2,3,1,4,10).pipe(last(val => val > 2)).subscribe(val => console.log('last > 2: ', val));
    of(1,2,3).pipe(last(val => val > 10)).subscribe({
      next(value: any) {
        console.log('last > 10: ', value);
      },
      error(err: any) {
        console.log('last > 10 error: ', err);
      }
    });
    of(1,2,3).pipe(last(val => val > 10, 50)).subscribe(val => console.log('last > 10, default 50: ', val));

    of(1,2,3).pipe(single(val => val === 3)).subscribe(val => console.log('single === 3: ', val));
    of(1,2,3).pipe(single(val => val === 4)).subscribe({ next(val) { console.log('single === 4 ', val)}, error(err) { console.log('single === 4 error: ', err.message)} });
    of(1,2,3,1).pipe(single(val => val === 1)).subscribe({ next(val) { console.log('single === 1 ', val)}, error(err) { console.log('single === 1 error: ', err.message)} });

    of(1,2,3,4,5,6,7,8).pipe(skip(4)).subscribe(val => console.log('skip 4: ', val));
    of(1,2,3,4,5,2,7,1).pipe(skipWhile(val => val < 3)).subscribe(val => console.log('skipWhile < 3: ', val));
    // interval(1000).pipe(skipUntil(timer(6000))).subscribe(val => console.log('skipUntil 6 seconds passed: ', val));
    of(10,21,3,14,5,6,7,8).pipe(skipLast(4)).subscribe(val => console.log('skipLast 4: ', val));

    of(1,2,3,4,5)
    // scan returns intermediate, accumulated values
    .pipe(scan((acc, value) => acc + value, 0))
    .subscribe(val => console.log('scan: ', val));

    of(1,2,3,4,5)
    // reduce doesn't return intermediate, accumulated values
    .pipe(reduce((acc, val) => val + acc, 0))
    .subscribe(val => console.log('reduce: ', val));

    this.formObservable = this.form.valueChanges
    // emits last received value if there is no new value after 500ms
    .pipe(debounceTime(500))
    .subscribe(data => console.log("debounceTime: ", data));

    this.form2Observable = this.form2.valueChanges
    // emits last received value after delay set by interval (or any other observable)
    .pipe(debounce(() => interval(500)))
    .subscribe(data => console.log('debounce: ', data));

    of(1,2,3,4,5)
    .pipe(
      tap(val => console.log('before delay 5000ms')),
      delay(5000)
    )
    .subscribe(val => console.log('after delay 5000ms', val));

    const now = new Date();
    const date = now.setSeconds(now.getSeconds() + 5);
    of(1,2,3,4,5)
    .pipe(
      tap(val => console.log('before delay by date')),
      delay(date)
    )
    .subscribe(val => console.log('after delay by date', val));

    of(1,2,3,4,5)
    .pipe(
      tap(val => console.log('before delayWhen')),
      delayWhen(() => timer(5000))
    )
    .subscribe(val => console.log('after delayWhen', val));

    of(1,2,3,"A",5).pipe(
      map(val => {
        if(isNaN(+val)) {
          throw new Error('Not a number!!!');
        }
        return val;
      }),
      catchError(error => {
        console.log('Caught error, Rethrowing');
        return throwError(() => error);
      })
    )
    .subscribe({ 
      next(val: any) {
        console.log('throwError: ', val);
      },
      error(err: any) {
        console.log('throwError (error): ', err);
      }
    })

    of(1,2,3,"A",5).pipe(
      map(val => {
        if(isNaN(+val)) {
          throw new Error('Not a number!!!');
        }
        return val;
      }),
      retry(1),
      catchError((error, src) => {
        console.log('Caught error, Rethrowing');
        console.log('catchError src: ', src);
        return of(0);
      })
    )
    .subscribe({ 
      next(val: any) {
        console.log('catchError: ', val);
      },
      error(err: any) {
        console.log('catchError (error): ', err);
      }
    })

    // Hot observable - does not wait for a subscriber to emit the data. It starts emitting right away
    // Thus values 1st and 2nd in below example are lost
    const subject$ = new Subject();
    subject$.next('1st');
    subject$.next('2nd');
    subject$.subscribe(data => console.log('Hot subscriber:', data));
    subject$.next('3rd');

    this.obs.subscribe(subject$);
    subject$.complete();

    // Subscription on observable createss a separate instance of the producer => separate subscribers get different values
    const observable = new Observable<number>(subscriber => {
      subscriber.next(Math.floor(Math.random() * 200) + 1);
    })
    observable.subscribe(val => console.log('Obs1: ', val));
    observable.subscribe(val => console.log('Obs2: ', val));

    // Subject maintains a list of subscribers => all subscribers get the same value
    const subject2$ = new Subject();
    subject2$.subscribe(val => console.log('Sub1: ', val));
    subject2$.subscribe(val => console.log('Sub2: ', val));
    subject2$.next(Math.floor(Math.random() * 200) + 1);

    // BehaviorSubject takes an initial value and stores last emitted value
    const behaviorSubject$ = new BehaviorSubject(0);
    behaviorSubject$.subscribe(val => console.log('Behavior Subject, Sub1: ', val));
    behaviorSubject$.next(1);
    behaviorSubject$.next(2);
    behaviorSubject$.subscribe(val => console.log('Behavior Subject, Sub2: ', val));

    // ReplaySubject - emits 'historical' values for new subscribers
    const replaySubject$ = new ReplaySubject();
    replaySubject$.next(1);
    replaySubject$.subscribe(val => console.log('Replay subject, Sub1: ', val));
    replaySubject$.next(2);
    replaySubject$.subscribe(val => console.log('Replay subject, Sub2: ', val));
    replaySubject$.complete();
    replaySubject$.error("Error!");
    replaySubject$.next(3);
    replaySubject$.subscribe({
      next(val: any) {
        console.log('Replay subject, Sub3: ', val);
      },
      error(err: any) {
        console.log('Replay subject, Sub3 (error): ', err);
      }
    });

    // AsyncSubject - subscribers get the last emitted value (just before the complete)
    const asyncSubject = new AsyncSubject();
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.subscribe(val => console.log('Async subject, Sub1: ', val));
    asyncSubject.next(3);
    asyncSubject.subscribe(val => console.log('Async subject, Sub2: ', val));
    asyncSubject.next(4);
    asyncSubject.complete();
    asyncSubject.error('Error!');
    asyncSubject.next(5);
    asyncSubject.subscribe({
      next(val: any) {
        console.log('Async subject, Sub3: ', val);
      },
      error(val: any) {
        console.log('Async subject. Sub3 (error): ', val);
      }
    });
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

  // Cold observable - does not active producer until there is a subscriber. It produces the data only when there is a subscriber
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
  private sourceObs = of(1, 2, 3, 4);
  private innerObs = of('A', 'B', 'C', 'D');
  private notifier = new Subject();
  private obs1 = interval(1000).pipe(takeUntil(this.notifier));
  public form: FormGroup = new FormGroup({
    name: new FormControl()
  });
  public form2: FormGroup = new FormGroup({
    name: new FormControl()
  });
  formObservable!: Subscription;
  form2Observable!: Subscription;

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

  startObservable() {
    this.obs1.subscribe((val: any) => console.log('takeUntil: ', val));
  }

  stopObservable() {
    this.notifier.next(undefined);
    this.notifier.complete();
  }
}

class Item {
  constructor(public readonly name: string) {}
}

class StyleClass {
  'color' = 'purple';
  'font-size.px' = 20;
}