import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gst-edit-purchase',
  templateUrl: './gst-edit-purchase.component.html',
  styleUrls: ['./gst-edit-purchase.component.css'],
  providers: [NGXLogger]
})
export class GSTEditPurchaseComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
