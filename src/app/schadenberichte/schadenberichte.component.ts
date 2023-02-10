import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-schadenberichte',
  templateUrl: './schadenberichte.component.html',
  styleUrls: ['./schadenberichte.component.css']
})
export class SchadenberichteComponent implements OnInit {
  users: User[] = [];
  user: User | undefined;
  constructor(public userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUser();
  }


  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = [...users];
      })
  }
}
