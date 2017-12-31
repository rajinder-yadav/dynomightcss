import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  npm = 'npm install --save dm-css';
  link = '<link href="https://cdn.jsdelivr.net/npm/dm-css@1.0.10/css/dm.min.css" rel="stylesheet">';
  html = `<!doctype html>
<html lang="en">
  <head>
    <title>Dyno Might CSS</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Dyno Might CSS Toolkit, DM-CSS -->
    <link href="https://cdn.jsdelivr.net/npm/dm-css@1.0.10/css/dm.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, Inter-Web!</h1>
  </body>
</html>`;


  constructor() { }

  ngOnInit() {
  }

}
