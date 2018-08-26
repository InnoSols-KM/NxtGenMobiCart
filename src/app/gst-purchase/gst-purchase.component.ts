import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gst-purchase',
  templateUrl: './gst-purchase.component.html',
  styleUrls: ['./gst-purchase.component.css'],
  providers: [NGXLogger]
})
export class GSTPurchaseComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
