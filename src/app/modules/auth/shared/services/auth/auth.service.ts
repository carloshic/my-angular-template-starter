import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StorageService } from '../../../../../core/services';
import { IAuth, ILogin } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static storageAuthKey = 'auth';
  static storageTokenKey = 'token';

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
    }).pipe(delay(1000));
  }

  logout(): void {
    this.storageService.removeItem(AuthService.storageAuthKey);
  }

  setLogin(auth: IAuth): void {
    this.storageService.setItem(AuthService.storageAuthKey, auth);
    this.storageService.setItem(AuthService.storageTokenKey, '[token]');
  }

  getLoginInfo(): IAuth {
    if (this.isAuthenticated()) {
      return this.storageService.getItem(AuthService.storageAuthKey);
    } else {
      throw new Error('User is not loggedI');
    }
  }

  getToken(): string {
    return this.storageService.getItem<string>(AuthService.storageTokenKey);
  }

  isAuthenticated(): boolean {
    return this.storageService.getItem<IAuth>(AuthService.storageAuthKey) !== null;
  }
}
