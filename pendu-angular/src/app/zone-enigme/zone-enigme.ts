import { Component, computed, input } from '@angular/core';

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

  phraseToCharArray = (phrase?: string): string[][] | undefined => {
    return phrase?.split(' ').map(mot => mot.split(''));
  };

  motsArray = computed(() => {
    const mots = this.mots();
    return mots ? this.phraseToCharArray(mots) : undefined;
  });
}
