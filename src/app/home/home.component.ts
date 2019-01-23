import {Component, OnInit} from '@angular/core';
import {HomeService} from './services/home.service';
import {Item} from './modules/table/models/item.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data$: Observable<Item[]> = this._homeService.getData();

  constructor(private _homeService: HomeService) {}
}
