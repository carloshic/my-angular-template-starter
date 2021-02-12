import { OverlayContainer } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ISiteTheme,
  ThemeStorageService
} from '../../../core/services';

@Component({
  selector: 'app-theme-picker',
  templateUrl: 'theme-picker.component.html',
  styleUrls: ['theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent implements OnInit {
  currentTheme: ISiteTheme;

  changeTheme = new EventEmitter<ISiteTheme>();

  // The below colors need to align with the themes defined in theme-picker.scss
  themes: ISiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber-light',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber-dark',
      isDark: true,
      isDefault: true,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink-light',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink-dark',
      isDark: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey-light',
      isDark: false,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey-dark',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green-light',
      isDark: false,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green-dark',
      isDark: true,
    },
  ];

  constructor(
    private themeStorageService: ThemeStorageService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private overlayContainer: OverlayContainer
  ) {
    this.iconRegistry.addSvgIcon(
      'theme-example',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-demo-icon.svg')
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      const themeName = this.themeStorageService.getStoredThemeName();
      if (themeName) {
        this.selectTheme(themeName);
      }
    }, 0);
  }

  selectTheme(themeName: string): void {
    const theme = this.themes.find((currentTheme) => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    this.themeStorageService.storeTheme(theme);

    this.setContainerClass(theme.name);
  }

  private setContainerClass(themeClass: string): void {
    const overlay = this.overlayContainer.getContainerElement();
    this.themes.forEach(theme => overlay.classList.remove(theme.name));
    overlay.classList.add(themeClass);
  }
}
