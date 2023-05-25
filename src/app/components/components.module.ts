import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { NgzorroModule } from '../ngzorro/ngzorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    UserComponent
  ],
  exports: [
    LoginComponent,
    TableComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgzorroModule
  ]
})
export class ComponentsModule { }
