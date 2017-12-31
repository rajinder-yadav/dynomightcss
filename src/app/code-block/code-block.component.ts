import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js';

// Usage: Template
//  <code-block [code]="html" cls="html w70 mxa"></code-block>

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit, AfterViewInit {

  @Input() code = '';
  @Input() cls = '';

  constructor(private el: ElementRef) {
    // console.log('code-block ctor');
  }

  ngOnInit() {
    // console.log('code-block init');
  }

  ngAfterViewInit() {
  // console.log('after view init');
    // this.el.nativeElement.class = `${this.el.nativeElement.class} w70 mxa`;
    // this.el.nativeElement.innerText = this.code;
    hljs.highlightBlock(this.el.nativeElement);
  }
}
