import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User | undefined;
  updateForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute,
    private usersService: UserService) { }
  
  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.usersService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    
  }
  
  save(): void {
    if (this.user) {
      this.usersService.updateUser(this.user)
      .subscribe(() => this.goBack())
    }
  }

}
