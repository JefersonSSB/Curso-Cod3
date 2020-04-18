import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: ''
  }

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {

  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage("Usuario inserido")
      this.router.navigate(['/users'])
    });

  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
