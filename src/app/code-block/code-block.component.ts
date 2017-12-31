import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {

  @Input() code = '';
  @Input() cls = 'js';
  constructor() { }

  ngOnInit() {
  }

}
