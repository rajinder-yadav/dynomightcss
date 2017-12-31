import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { MainComponent } from './main/main.component';

const mainRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CodeBlockComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(mainRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
