import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users'; // URL to web api
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();



  constructor(private http: HttpClient,private router: Router
  ) { }
  
  login(values: any): Observable<any> {
    return this.http.post<User>(this.usersUrl, values)
      .pipe(
        tap((user: User) => {
          if (user) {
            console.log(user);
            localStorage.setItem('email', user.email);
            this.currentUserSource.next(user);
            // Mit tab rxjs wird der User verwendet ohne dass er verändert wird. User wird automatisch zurücgegeben.
          }         
        })
      ) 
  }
}
