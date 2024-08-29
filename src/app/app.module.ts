import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleService } from '../sample.service';
import { Routes } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { DemoChildComponent } from './demo/child-comp/demo-child.component';
import { FullNamePipe } from './demo/pipe.component'

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'request', component: RequestComponent },
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SampleService],
  declarations: [
    DemoComponent,
    RequestComponent,
    AppComponent,   
    DemoChildComponent,
    FullNamePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
