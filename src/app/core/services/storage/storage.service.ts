import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem<T>(itemName: string): T {
    const itemValue = localStorage.getItem(itemName);
    if (itemName) {
      return JSON.parse(itemValue);
    } else {
      return undefined;
    }
  }

  setItem<T>(itemName: string, itemValue: T): void {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }

  removeItem(itemName: string): void {
    localStorage.removeItem(itemName);
  }

  clearAllItems(): void {
    localStorage.clear();
  }
}
