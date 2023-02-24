import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  protected users: User[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getObservable().subscribe((users: User[]) => { this.users = users; });
    this.usersService.getUsers().subscribe((users: User[]) => { this.users = users; });
  }

  goToEdit(email: string): void {
    this.router.navigate(['/users/edit', email]);
  }

  remove(email: string): void {
    this.usersService.remove(email);
  }
}
