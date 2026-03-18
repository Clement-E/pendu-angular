import {Component, input} from '@angular/core';

@Component({
  selector: 'app-zone-enigme',
  imports: [],
  templateUrl: './zone-enigme.html',
  styleUrl: './zone-enigme.css',
})
export class ZoneEnigme {
  mots = input<string | null>(null)
  guesses = input<string[]>([])
  isGameOver = input<boolean>(false)
}
