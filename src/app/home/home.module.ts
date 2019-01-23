import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing';
import {RouterModule} from '@angular/router';
import {TableModule} from './modules/table/table.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    TableModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
