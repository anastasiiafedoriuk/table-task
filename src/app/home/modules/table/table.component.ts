import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Item} from './models/item.interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  data: Item[];

  columnsToDisplay: string[] = [
    'eventId',
    'eventName',
    'section',
    'venue',
    'price',
    'nominalPrice',
    'currency',
    'date',
    'available',
    'published',
    'start',
    'notify',
    'allSectors',
    'targetingByVenue',
    'ignoreNotes',
    'minPrice',
    'maxPrice',
    'indent',
    'minTickets'
  ];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  dataSource: MatTableDataSource<Item>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }
}
