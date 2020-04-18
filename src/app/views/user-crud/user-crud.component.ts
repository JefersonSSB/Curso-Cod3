import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Usuarios',
      icon: 'storefront',
      routeUrl: '/users'
    }
  }


  ngOnInit(): void {

  }

  navigateToUserCreate() {
    this.router.navigate(['/users/create'])
  }

}
