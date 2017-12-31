import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { MainComponent } from './main/main.component';
import { DocumentComponent } from './document/document.component';
import { SyntaxDirective } from './syntax.directive';

import * as hljs from 'highlight.js';
hljs.initHighlightingOnLoad();

const mainRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'document', component: DocumentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CodeBlockComponent,
    MainComponent,
    DocumentComponent,
    SyntaxDirective
  ],
  imports: [
    RouterModule.forRoot(mainRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
