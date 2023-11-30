import { Component } from '@angular/core';

@Component({
  selector: 'ry-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  providers: [],
})
export class HomeComponent {
  cdnLink =
    '<link href="https://cdn.jsdelivr.net/npm/dm-css@2.3.1/css/dm.min.css" rel="stylesheet">';

  htmlTemplate = `<!doctype html>
  <html lang="en">
    <head>
      <title>Dyno Might CSS</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- Dyno Might CSS Toolkit, DM-CSS -->
      <link href="https://cdn.jsdelivr.net/npm/dm-css@2.3.1/css/dm.min.css" rel="stylesheet">
    </head>
    <body>
      <h1>Hello, Inter-Web!</h1>
    </body>
  </html>`;
}
