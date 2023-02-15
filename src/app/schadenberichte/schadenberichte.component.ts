import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { USERS } from '../models/mock-users';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-schadenberichte',
  templateUrl: './schadenberichte.component.html',
  styleUrls: ['./schadenberichte.component.css']
})
export class SchadenberichteComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'status', 'objektBezeichung', 'name'];
  dataSource = new MatTableDataSource<User>(USERS);

  users: User[] = [];
  user: User | undefined;
  constructor(public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
   
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUser();
    
  }

 

 
  navigateTo(): void {
    this.router.navigate(['schadensfall', 'create']);
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
