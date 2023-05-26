import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzFormModule
  ],
  exports: [
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzAvatarModule,
    NzIconModule,
    NzSpinModule
  ]
})
export class NgzorroModule { }
