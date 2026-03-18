import {Component, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PenduArea} from './pendu-area/pendu-area';
import {ZoneEnigme} from './zone-enigme/zone-enigme';
import {PropositionArea} from './proposition-area/proposition-area';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PenduArea, ZoneEnigme, PropositionArea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pendu-angular');

  errors: string | null = null;
  isWon: boolean = false;
  guesses: string[] = [''];
  mots: string = '';
  isGameOver: boolean = false;
  guess: string = '';
  handleGuessValidate: () => void = () => {};
  reset: () => void = () => {};
}
