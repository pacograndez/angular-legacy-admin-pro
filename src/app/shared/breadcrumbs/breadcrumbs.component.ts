import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  private unsubscribe$: Subscription;

  constructor(private router: Router) {
    this.unsubscribe$ = this.getDataPath().subscribe(event => {
      this.title = event.title;
      document.title = `Admin Pro - ${this.title}`;
    });
  }

  getDataPath() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

}
