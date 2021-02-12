import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../../../core/services';
import { IAuth, ILogin } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static storageKey = 'auth';

  users = [
    {
      username: 'admin',
      password: 'admin*',
      roles: ['USER', 'ADMIN'],
    },
    {
      username: 'user',
      password: 'user*',
      roles: ['USER'],
    }
  ];

  constructor(
    private storageService: StorageService
  ) { }

  login(login: ILogin): Observable<IAuth> {
    return new Observable<IAuth>(observer => {
      const user = this.users.find(x => x.username === login.username && x.password === login.password);
      setTimeout(() => {
      if (user) {
          observer.next({
            _id: new Date().getTime().toString(),
            username: user.username,
            roles: user.roles,
          });
        } else {
          observer.error(new Error('Invalid Login'));
        }
      observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.storageService.removeItem(AuthService.storageKey);
  }

  setLogin(auth: IAuth): void {
    this.storageService.setItem(AuthService.storageKey, auth);
  }

  getLogin(): IAuth {
    if (this.isAuthenticated()) {
      return this.storageService.getItem(AuthService.storageKey);
    } else {
      throw new Error('User is not loggedI');
    }
  }

  isAuthenticated(): boolean {
    return this.storageService.getItem<IAuth>(AuthService.storageKey) !== null;
  }
}
