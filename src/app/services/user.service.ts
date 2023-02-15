import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users'; // URL to web api
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }

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

  createUser(values: any): Observable<any> {
    return this.http.post<User>(this.usersUrl, values).pipe(
      tap((user: User) => {
        if (user) {
          localStorage.setItem('name', user.name);
          this.currentUserSource.next(user);
        }
      })
    );

  }
  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated User id=${user.id}`)),
        catchError(this.handleError<any>('updateUser'))
      )
  }

  checkEmailExists(email: string) {
    return this.http.get(this.usersUrl + '/account/emailexists?email=' + email);
  }


  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<User[]>('getUsers', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }
}
