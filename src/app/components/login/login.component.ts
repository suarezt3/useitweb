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

  public submitted: boolean = false;
  public loader   : boolean = false;
  public showError: boolean = false;
  public error!   : string;
  public myForm!  : FormGroup;

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
        this.submitted = true;
        this.myForm.reset()
        this.loader = true;


        /*establece un tiempo de espera de 2 segundos (2000 milisegundos) antes de ejecutar el código
        dentro de la función. Este código establece la variable `loader` en `false` y navega
        a la ruta `/table` utilizando el servicio `Router`. */
        setTimeout(() => {
          this.loader = false;
          this.router.navigate(['/table'])
        }, 2000); // 2 segundos

      }else {

          /* Este código establece la variable booleana `showError` en `true`, que se utiliza para
          mostrar un mensaje de error en el formulario de inicio de sesión. Luego, establece un
          tiempo de espera de 3 segundos (3000 milisegundos) usando la función `setTimeout()` . */
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 3000); // 3 segundos
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
