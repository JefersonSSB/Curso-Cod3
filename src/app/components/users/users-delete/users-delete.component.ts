import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    email: ''
  }
  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe(user => {
      this.user = user;
    });
  }

  deleteUsuario() {
    this.userService.delete(this.user.id).subscribe(() => {
      this.userService.showMessage("Usuario deletado");
      this.router.navigate(["/users"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
