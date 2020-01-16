import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }


  getData() {
    return [
      {
      "name": "testName",
      "lastname": "testLastName",
      "age": 55,
      },
      {
        "name": "testName2",
        "lastname": "testLastName2",
        "age": 22,
      },
      {
        "name": "testName3",
        "lastname": "testLastName3",
        "age": 33,
      },
      {
        "name": "testName4",
        "lastname": "testLastName4",
        "age": 44,
      },
  ]
  }
}
