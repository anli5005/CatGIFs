import { Component, OnInit } from '@angular/core';

export interface Image {
  href?: string;
  src: string;
  alt?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  times = 500;
  images: Image[] = [];

  ngOnInit() {
    for (let i = 0; i < this.times; i++) {
      this.images.push({
        href: "https://en.wikipedia.org/wiki/Cat",
        src: "https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif",
        alt: "MEOW"
      });
    }
  }
}
