import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css'],
  providers: [NGXLogger]
})
export class PurchaseInvoiceComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
