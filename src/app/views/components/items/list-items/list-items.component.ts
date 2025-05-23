import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DataTable } from 'simple-datatables';


@Component({
  selector: 'app-list-items',
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements AfterViewInit {
  @ViewChild('table', { static: true }) table!: ElementRef;

  stocks = [
    { name: 'Apple Inc.', ticker: 'AAPL', price: '$192.58', marketCap: '$3.04T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$340.54', marketCap: '$2.56T' },
    // más datos...
  ];

  ngAfterViewInit() {
    new DataTable(this.table.nativeElement, {
      searchable: true,
      sortable: false
    });
  }
}
