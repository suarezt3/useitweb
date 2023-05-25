import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      user: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    })

  }


  save() {
    console.log(this.myForm.value);

  }


}
