import {Component, input} from '@angular/core';

@Component({
  selector: 'app-pendu-area',
  imports: [],
  templateUrl: './pendu-area.html',
  styleUrl: './pendu-area.css',
  standalone: true
})
export class PenduArea {
  errors = input.required<string[]>();
  isWon = input.required<boolean>();

  e(number: number) {
    return this.errors().length + 1 > number
  };
}
