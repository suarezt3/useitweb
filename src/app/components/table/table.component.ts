import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data!:any


  constructor(private userService: UsersService) {}

  ngOnInit() {

    /* `this.userService.getUsers().subscribe((usuario) => { this.data = usuario })` está realizando
    una solicitud HTTP GET al servidor para obtener la lista de usuarios. Una vez que se recibe la
    respuesta, se llama al método `subscribe` con una función de devolución de llamada que asigna
    los datos de respuesta a la propiedad `data` del componente. De esta forma, los datos obtenidos
    se pueden usar en la plantilla para mostrar la lista de usuarios en una tabla. */
    this.userService.getUsers().subscribe((user) => {
      this.data = user
    })

  }

}
