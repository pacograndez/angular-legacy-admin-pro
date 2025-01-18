import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  private unsubscribeInterval: Subscription;

  constructor() {
    /* this.returnObservable().pipe(
      retry(2)
    ).subscribe(
      value => console.log('Subs:', value),
      error => console.warn('Error:', error),
      () => console.info('Obs$ terminado')
    );
 */
    this.unsubscribeInterval = this.returnInterval().subscribe(value => console.log(value))
   }

   private returnObservable(): Observable<number> {
    let i: number = -1;

    const obs$ = new Observable<number>( observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('I llegó al valor de 2');
        }

      }, 1000)
    });

    return obs$;
   }

   private returnInterval(): Observable<number> {
    /* const obs$ = interval(1000).pipe(take(4), map(v => v + 1));
    return obs$; */
    return interval(500).pipe(map(v => v + 1), filter(v => v % 2 === 0 ? true : false), take(10));
   }

   ngOnDestroy(): void {
    this.unsubscribeInterval.unsubscribe();
  }
}
