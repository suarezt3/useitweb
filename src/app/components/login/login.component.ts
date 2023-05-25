import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public error!: string
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {}

  ngOnInit(): void {

    /**
     * Formulario del login
     */
    this.myForm = this.fb.group({
      user: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    })

  }


  /**
   * Metodo para realizar el login del usuario, si existe continua de lo contrario arrojara un error
   */
  save() {
    let user     = this.myForm.get('user')?.value
    let password = this.myForm.get('password')?.value

    this.userService.auth(user, password).subscribe((getuser) => {
      if(getuser[0]?.user === user && getuser[0]?.password === password) {
        this.router.navigate(['/table'])
      }else {
        this.error = 'Usuario o contraseña incorrectos'
        this.myForm.reset()
      }

    })

  }


  /**
   *
   * Para validar los campos del formulario
   * @returns
   */
  invalidField( field: string ) {
    return this.myForm.get(field)?.invalid
            && this.myForm.get(field)?.touched;
  }


}
