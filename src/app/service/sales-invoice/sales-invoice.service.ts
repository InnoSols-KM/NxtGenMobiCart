import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NGXLogger } from 'ngx-logger';


@Injectable()
export class SalesInvoiceService {
  //URL for CRUD operations
  mobicartURL = "http://localhost:3000/skm/adminCustomerData/";
  result;
  constructor(private _http:Http, private logger: NGXLogger) { }

  getCustomerSearch():Observable<Array<any>>{
    this.logger.info("Inside getCustomerSearch Service Call");
    return this._http.get(this.mobicartURL)
    .map(this.extractData)
    .catch(this.handleError);
      //return this._http.get('').map(result => this.result = result.json().data);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
