import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.css'],
  providers: [NGXLogger]
})
export class BarcodeGeneratorComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
