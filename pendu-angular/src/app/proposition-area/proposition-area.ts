import {Component, input} from '@angular/core';

@Component({
  selector: 'app-proposition-area',
  imports: [],
  templateUrl: './proposition-area.html',
  styleUrl: './proposition-area.css',
})
export class PropositionArea {
  guess= input()
  handleGuessValidate= input()
  isGameOver= input()
  reset= input()
}
