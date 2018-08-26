import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gst-return',
  templateUrl: './gst-return.component.html',
  styleUrls: ['./gst-return.component.css'],
  providers: [NGXLogger]
})
export class GSTReturnComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
