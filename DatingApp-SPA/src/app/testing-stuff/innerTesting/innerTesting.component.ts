import { Component, OnInit, Input } from '@angular/core';
import { TestingData } from 'src/app/_models/testing-data';

@Component({
  selector: 'app-innerTesting',
  templateUrl: './innerTesting.component.html',
  styleUrls: ['./innerTesting.component.css']
})
export class InnerTestingComponent implements OnInit {

  @Input() user: TestingData;
  value;

  constructor() { }

  ngOnInit() {
  }

  sendUp(value) {
    console.log(value);
  }

}
