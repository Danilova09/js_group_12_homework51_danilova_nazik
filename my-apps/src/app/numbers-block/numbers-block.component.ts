import {Component} from '@angular/core';

@Component({
  selector: 'app-numbers-block',
  templateUrl: './numbers-block.component.html',
  styleUrls: ['./numbers-block.component.css']
})
export class NumbersBlockComponent {
  arrayNumbers: number[] = [];

  constructor() {
    this.arrayNumbers = this.generateNewArrayNumbers();
  }

  getRandomIntNumber(min: number = 5, max: number = 36) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNewArrayNumbers() {
    const array: number[] = [];
    while (array.length < 5) {
      let randomNumber = this.getRandomIntNumber();
      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    array.sort((a, b) => {
      return a - b
    });
    this.arrayNumbers = array;
    return array;
  }
}
