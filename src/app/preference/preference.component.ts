import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css'],
  providers: [NGXLogger]
})
export class PreferenceComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
