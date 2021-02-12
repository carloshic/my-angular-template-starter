import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../modules/auth/shared/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showMenuIcon: boolean;

  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter();

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/', 'auth'], { replaceUrl: true });
  }

}
