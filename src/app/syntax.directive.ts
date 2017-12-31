import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
  selector: '[syntax]'
})
export class SyntaxDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('syntax') code = '';

  ngOnInit() {
    this.el.nativeElement.class = `${this.el.nativeElement.class} w70 mxa`;
    this.el.nativeElement.innerText = this.code;
    hljs.highlightBlock(this.el.nativeElement);
  }

}
