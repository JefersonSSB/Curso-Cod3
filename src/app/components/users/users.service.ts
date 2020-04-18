import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "http://localhost:3001/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ['msg-error'] : ['msg-success']

    })
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY;
  }
}