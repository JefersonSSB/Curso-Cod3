import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
  user: User = {
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

  updateUsuario() {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage("Usuario atualizado com sucesso");
      this.router.navigate(["/users"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
