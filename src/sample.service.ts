import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SampleService {
  constructor(private http: HttpClient) {}

  public getComments(): Observable<unknown[]> {
    const url = "https://jsonplaceholder.typicode.com/comments";
    return this.http.get<unknown[]>(url);
  }

  public getToDoList(): Promise<unknown[]> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<unknown[]>(url).toPromise();
  }
}
