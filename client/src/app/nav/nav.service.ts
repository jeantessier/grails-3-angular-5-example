
import {refCount, publishReplay, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';



import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable()
export class NavService {

  _navData: Observable<any>;

  constructor(private http: Http) { }

  getNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.http.get(environment.serverUrl + 'application').pipe(
          map((res: Response) => res.json()),
          publishReplay(),
          refCount(),);
    }
    return this._navData;
  }
}
