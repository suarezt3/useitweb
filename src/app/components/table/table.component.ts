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

    this.userService.getUser().subscribe((user) => {
      console.log(user);
      this.data = user

    })

  }

}
