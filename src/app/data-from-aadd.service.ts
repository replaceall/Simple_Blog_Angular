import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataFromAaddService {

  constructor() { }
  private  dataOb$= new Subject();
  getData() {
    return this.dataOb$;
  }
updateData(data: Object) {
    this.dataOb$.next(data);
}
}
