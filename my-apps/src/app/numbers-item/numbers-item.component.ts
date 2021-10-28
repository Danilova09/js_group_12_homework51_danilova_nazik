import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-numbers-item',
  templateUrl: './numbers-item.component.html',
  styleUrls: ['./numbers-item.component.css']
})
export class NumbersItemComponent {
  @Input() number = 5;
}
