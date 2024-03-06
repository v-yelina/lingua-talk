import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isAllowed: boolean = true;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
  loginForm = this.formBuilder.group({
    login: ''
  });

  onSubmit(): void {
    this.loginForm.value.login === '1255' ? this.isAllowed = true : this.isAllowed = false;
    this.loginForm.reset();
  }
}
