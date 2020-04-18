import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { UsersDeleteComponent } from './components/users/users-delete/users-delete.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UserCrudComponent },
  { path: "users/create", component: UsersCreateComponent },
  { path: "users/update/:id", component: UsersUpdateComponent },
  { path: "users/delete/:id", component: UsersDeleteComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
