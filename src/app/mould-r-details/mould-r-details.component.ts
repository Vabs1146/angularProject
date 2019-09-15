import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mould-r-details',
  templateUrl: './mould-r-details.component.html',
  styleUrls: ['./mould-r-details.component.css']
})
export class MouldRDetailsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'DATE', 'WEIGHT', 'AMOUNT','TOTAL'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  DATE: string;
  ID: number;
  WEIGHT: number;
  AMOUNT: string;
  TOTAL:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, DATE: '28-08-2019', WEIGHT: 1.0079, AMOUNT: '23',TOTAL:'TOTAL'},
  {ID: 2, DATE: '28-08-2019',WEIGHT: 4.0026, AMOUNT: '21',TOTAL:'TOTAL'},
  
];
