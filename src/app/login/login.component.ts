import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from '../models/mock-users';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayedColums: string[]= ['id', 'name', ]
  users: User[] = [];
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor( private router: Router, private userService: UserService) { }


  onSubmit() {
    this.userService.login(this.loginForm.value).pipe().subscribe((user: User) => {
      const found = USERS.find(element => element.email == user.email);
      console.log(found);
      
      });
  }


  ngOnInit(): void {

  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = [...users];
        this.router.navigate(['schadenberichte']);
      })
  }
  
}
