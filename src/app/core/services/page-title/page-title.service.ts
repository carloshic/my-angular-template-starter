import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  innerTitle = 'Home';
  innerOriginalTitle = 'Angular Material';

  get title(): string {
    return this.innerTitle;
  }

  set title(title: string) {
    this.innerTitle = title;

    if (title) {
      title = `${title} | Angular Material`;
    } else {
      title = this.innerOriginalTitle;
    }

    this.bodyTitle.setTitle(title);
  }

  constructor(private bodyTitle: Title) {}
}
