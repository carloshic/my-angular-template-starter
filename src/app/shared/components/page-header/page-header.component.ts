import { Component } from '@angular/core';
import { PageTitleService } from '../../../core/services';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  constructor(public pageTitleService: PageTitleService) {}

  getTitle(): string {
    return this.pageTitleService.title;
  }
}
