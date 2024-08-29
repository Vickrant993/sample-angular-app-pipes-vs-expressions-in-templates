import { Component } from '@angular/core';
import { MySample } from './sample';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  public greeting = MySample.GREETING;
}
