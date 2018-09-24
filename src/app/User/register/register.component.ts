import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../../Shared/User';
import { CommunicationService } from '../../communication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends CommunicationService implements OnInit {
  registerformgroup: FormGroup;

  constructor(http: HttpClient, private route: Router) {
    super(http);
  }

  ngOnInit() {
    this.registerformgroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  onRegister() {
    const user = new User();

    const formValue = this.registerformgroup.value;
    user.First_Name = formValue.firstName;
    user.Last_Name = formValue.lastName;
    user.EmailId = formValue.emailId;
    user.Password = formValue.password;

    this.CreateData('User/Create', user)
      .subscribe(result => result);

    this.route.navigate(['Login']);
  }

}
