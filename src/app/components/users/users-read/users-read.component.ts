import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {
  users: User[];
  displayedColumns = ['id', 'name', 'email', 'action']
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private userService: UsersService) { }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.userService.read().subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    })
  }

}
