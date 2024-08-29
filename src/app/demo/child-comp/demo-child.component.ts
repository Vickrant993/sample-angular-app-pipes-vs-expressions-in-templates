import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
/* 3rd Party */
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Component({
  selector: 'demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoChildComponent implements OnChanges {
  @Input() person: { firstName: string; lastName: string };
  fullNamePerson = '';
  constructor() {}

  fullName() {
    console.log('full name called --> ');
    return this.person.firstName + ' ' + this.person.lastName;
  }
  onClick() {
    console.log('child button 1 was clicked');
  }

  onClickbtn2() {
    console.log('child button 2 was mouse moved');
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.person) {
    //   this.fullNamePerson = this.calculateFullName();
    // }
  }

  // calculateFullName() {
  //   console.log('calculate function calls -->');
  //   return this.person.firstName + ' ' + this.person.lastName;
  // }
}
