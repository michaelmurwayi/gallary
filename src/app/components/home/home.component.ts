import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  numOfImages = 8;
  images: Image [];

  constructor() {
    this.images = this.generateImagesList();
  }

  private generateRandomImage(): Image {
    const width = 600;
    const height = (Math.random() * (1000 - 400) + 400).toFixed();
    return {src: `https://picsum.photos/${width}/${height}/?random`};
  }

  private generateImagesList(): Image[] {
    const images: Image[] = [];
    for (let i = 0; i < this.numOfImages; i++){
      const image = this.generateRandomImage();
      image.alt = `#${i}`;
      images.push(image);
    }
    return images;
  }

  addImage() {
    const image = this.generateRandomImage();
    image.alt = `#${this.images.length}`;
    this.images.push(image);
  }


}
