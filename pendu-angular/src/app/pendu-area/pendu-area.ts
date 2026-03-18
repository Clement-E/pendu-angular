import {Component, input} from '@angular/core';

@Component({
  selector: 'app-pendu-area',
  imports: [],
  templateUrl: './pendu-area.html',
  styleUrl: './pendu-area.css',
})
export class PenduArea {
  errors = input<string | null>(null)
  isWon = input<boolean>(false)
}
