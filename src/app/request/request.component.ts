import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  google$: Observable<unknown>;
  microsoft$: Observable<unknown>;

  microsoftModel: unknown;

  public data = [
    {
      id: 0,
      name: 'A0',
    },
    {
      id: 1,
      name: 'Z1',
    },
    {
      id: 2,
      name: 'B2',
    },
    {
      id: 3,
      name: 'a3',
    },
    {
      id: 4,
      name: 'a7',
    },
  ];

  sortAsc(): void {
    this.data.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  sortDec(): void {
    this.data.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }

  ngOnInit() {
    this.google$ = this.http.get(`https://api.github.com/users/google`);
    this.microsoft$ = this.http.get(`https://api.github.com/users/microsoft`);
    this.fetchMicrosoftData();
  }

  fetchMicrosoftData(): void {
    this.microsoft$.subscribe((resp) => (this.microsoftModel = resp));
  }
}
