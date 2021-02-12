import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, NgZone, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISiteTheme, ThemeStorageService } from '../../../core/services/theme-storage';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 939;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  isExtraScreenSmall: Observable<boolean>;
  isScreenSmall: Observable<boolean>;
  theme: ISiteTheme;
  private subscriptions = new Subscription();

  constructor(
    public zone: NgZone,
    breakpoints: BreakpointObserver,
    private themeStorageService: ThemeStorageService,
  ) {
    this.isExtraScreenSmall = breakpoints
    .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
    .pipe(map(breakpoint => breakpoint.matches));

    this.isScreenSmall = breakpoints
    .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
    .pipe(map(breakpoint => breakpoint.matches));
  }

  ngOnInit(): void {
    this.themeStorageService.onThemeUpdate.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleSideNav(): void {
    this.sidenav.toggle();
  }

}
