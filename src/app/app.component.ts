import { AuthService } from './modules/auth/shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISiteTheme, ThemeStorageService } from './core/services/theme-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: ISiteTheme;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private themeStorageService: ThemeStorageService,
  ) {}

  ngOnInit(): void {
    const themeName = this.themeStorageService.getStoredThemeName() || 'indigo-pink-light';

    this.theme = {
      name: themeName,
      accent: '',
      primary: ''
    };

    this.themeStorageService.onThemeUpdate.subscribe((theme) => {
      this.theme = theme;
    });

    if (!this.authService.isAuthenticated()) {
      this.navigateToLogin();
    } else {
      this.navigateToHome();
    }
  }

  navigateToLogin(): void {
    this.router
    .navigate(['auth', 'login'], {
      relativeTo: this.activatedRoute
    });
  }

  navigateToHome(): void {
    this.router
    .navigate(['home'], {
      relativeTo: this.activatedRoute
    });
  }
}
