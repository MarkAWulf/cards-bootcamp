import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [ CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree',
      imageUrl: 'tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { title: 'Snowy Mountain',
      imageUrl: 'mountain.jpeg',
      username: 'Moutainlover',
      content: 'here is a pic of a snowy mountain'
    },
    { title: 'Mountain Bike',
      imageUrl: 'biking.jpeg',
      username: 'biking12222',
      content: 'i did some biking today'
    }
  ];
}
