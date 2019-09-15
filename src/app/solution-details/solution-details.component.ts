import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.css']
})
export class SolutionDetailsComponent implements OnInit {
  
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
    {ID: 1, DATE: 'Hydrogen', WEIGHT: 1.0079, AMOUNT: 'H',TOTAL:'TOTAL'},
    {ID: 2, DATE: 'Helium',WEIGHT: 4.0026, AMOUNT: 'He',TOTAL:'TOTAL'},
    
  ];
