import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    hljs.initHighlightingOnLoad();
  }
}
