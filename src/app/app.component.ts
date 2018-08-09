import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any;

  application_form: FormGroup;
  constructor() {
    this.title='app';
    this.application_form = new FormGroup({
      firstname : new FormControl('', Validators.required),
      fullname : new FormControl('', Validators.required),
      employeeCode : new FormControl('', Validators.pattern(/^[8]\d{6,6}/)),
      bloodGroup: new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')),
    })
  }
}
