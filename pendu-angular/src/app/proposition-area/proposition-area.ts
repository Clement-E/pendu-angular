import {Component, input, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-proposition-area',
  imports: [
    NgClass
  ],
  templateUrl: './proposition-area.html',
  styleUrl: './proposition-area.css',
})
export class PropositionArea {
  guess= input<string>()
  handleGuessValidate= input()
  isGameOver= input.required<boolean>()
  reset= input()

  isGuessFocused = signal<boolean>(false);
}
