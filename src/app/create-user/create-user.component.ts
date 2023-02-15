import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  createForm = new FormGroup({
    id: new FormControl('', Validators.required),
    objektBezeichnung: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    erstellern: new FormControl('', Validators.required)
  });

  constructor(private userServices: UserService) { }



}
