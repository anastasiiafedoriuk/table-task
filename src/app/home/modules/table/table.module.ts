import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {HomeService} from '../../services/home.service';
import {MatIconModule, MatPaginatorModule, MatSlideToggleModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  declarations: [ TableComponent ],
  providers: [
    HomeService
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {}
