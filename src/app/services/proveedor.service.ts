import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProveedorService {

  constructor( @Inject(Http) public http: Http) { }

  getCategories() {
    return this.http.get('/assets/data.json')
      .map(this.extractData)
      .toPromise();

  }
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  getCategory(id) {
    console.log(id);
    return this.getCategories()
      .then(cats => cats.find(cat => cat.id == id));
  }
}