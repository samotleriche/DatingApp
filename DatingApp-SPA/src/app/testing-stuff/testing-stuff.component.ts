import { Component, OnInit } from '@angular/core';
import { TestingService } from '../_services/testing.service';
import { TestingData } from '../_models/testing-data';

@Component({
  selector: 'app-testing-stuff',
  templateUrl: './testing-stuff.component.html',
  styleUrls: ['./testing-stuff.component.css']
})
export class TestingStuffComponent implements OnInit {

  data: TestingData[];

  constructor(private dataService: TestingService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data = this.dataService.getData();
  }
}
