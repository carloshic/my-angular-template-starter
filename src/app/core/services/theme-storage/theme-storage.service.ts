import { StorageService } from './../storage';
import {Injectable, EventEmitter} from '@angular/core';

export interface ISiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {

  static storageKey = 'app-theme-name';

  onThemeUpdate: EventEmitter<ISiteTheme> = new EventEmitter<ISiteTheme>();

  constructor(private storageService: StorageService) {}

  storeTheme(theme: ISiteTheme): void {
    try {
      this.storageService.setItem(ThemeStorageService.storageKey, theme.name);
      this.onThemeUpdate.emit(theme);
    } catch { }
  }

  getStoredThemeName(): string | null {
    try {
      return this.storageService.getItem<string>(ThemeStorageService.storageKey);
    } catch {
      return null;
    }
  }

  clearStorage(): void {
    try {
      this.storageService.removeItem(ThemeStorageService.storageKey);
    } catch { }
  }
}
