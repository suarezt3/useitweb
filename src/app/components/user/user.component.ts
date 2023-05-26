import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public id: string = ""
  public user!: any


  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {

    /**
   *
   * @param activatedRoute Tomamos el ID de cada usuario inividual
   */
    this.activatedRoute.params.subscribe(({id}) => this.id = id)

    /**
     * Enviamos el ID como parametro y consultamos el usuario
     */
    this.userService.getUser(this.id).subscribe((user) => {
      this.user = user[0]
    })


  }

}
