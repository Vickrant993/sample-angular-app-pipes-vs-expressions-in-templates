import { Component, OnInit } from '@angular/core';
/* 3rd Party */
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  public person = {
    firstName: 'vickrant',
    lastName: 'chhetri',
  };
  constructor() {}

  ngOnInit() {
    this.fullName();
  }
  fullName() {
    return this.person.firstName + ' ' + this.person.lastName;
  }
  onClick() {
    console.log('parent button was clicked --> ');
  }
}
