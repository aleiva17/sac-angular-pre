import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected users: User[] = [];
  protected users$: Subject<User[]> = new Subject();

  constructor() { }

  add(user: User): void {
    this.users.push(user);
    this.users$.next(this.users);
  }

  update(email: string, newUser: User): void {
    this.users = this.users.map(user => user.email !== email ? user : newUser);
    this.users$.next(this.users);
  }

  remove(email: string): void {
    this.users = this.users.filter(user => user.email !== email);
    this.users$.next(this.users);
  }

  getUser(email: string): User | undefined {
    return this.users.find(user => user.email == email);
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getObservable(): Observable<User[]> {
    return this.users$.asObservable();
  }
}
