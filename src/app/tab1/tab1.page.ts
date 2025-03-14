import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonBadge,
  IonText,
} from '@ionic/angular/standalone';
interface Word {
  word: string;
  emoji: string;
  audio?: string;
}

export const WORDS: Word[] = [
  // Substantivos
  { word: 'Song', emoji: '🎶', audio: 'assets/audio/song.mp3' },
  { word: 'The World', emoji: '🌍', audio: 'assets/audio/the_world.mp3' },
  { word: 'Heart', emoji: '❤️', audio: 'assets/audio/heart.mp3' },
  { word: 'Skin', emoji: '🧴', audio: 'assets/audio/skin.mp3' },
  { word: 'Shoulder', emoji: '🤷', audio: 'assets/audio/shoulder.mp3' },
  { word: 'A fool', emoji: '🤡', audio: 'assets/audio/a_fool.mp3' },
  { word: 'The pain', emoji: '💔', audio: 'assets/audio/the_pain.mp3' },
  { word: 'The movement', emoji: '🌀', audio: 'assets/audio/the_movement.mp3' },
  { word: 'The minute', emoji: '⏱️', audio: 'assets/audio/the_minute.mp3' },

  // Advérbio
  { word: 'Then', emoji: '⤴️', audio: 'assets/audio/then.mp3' },

  // Pronomes
  { word: 'It', emoji: '🐾', audio: 'assets/audio/it.mp3' },
  { word: 'He', emoji: '👦', audio: 'assets/audio/he.mp3' },
  { word: 'His', emoji: '👦➡️', audio: 'assets/audio/his.mp3' },
  { word: 'His world', emoji: '👦➡️🌍', audio: 'assets/audio/his_world.mp3' },
  { word: 'You', emoji: '🫵', audio: 'assets/audio/you.mp3' },
  { word: 'Then you', emoji: '⤴️🫵', audio: 'assets/audio/then_you.mp3' },
  { word: 'Your', emoji: '🫵➡️', audio: 'assets/audio/your.mp3' },
  { word: 'Your heart', emoji: '🫵➡️❤️', audio: 'assets/audio/your_heart.mp3' },
  { word: 'Your skin', emoji: '🫵➡️🧴', audio: 'assets/audio/your_skin.mp3' },
  { word: 'Your shoulder', emoji: '🫵➡️🤷', audio: 'assets/audio/your_shoulder.mp3' },
  { word: 'Your shoulders', emoji: '🫵➡️🤷🤷', audio: 'assets/audio/your_shoulders.mp3' },

  // Preposição
  { word: 'Upon', emoji: '⬆️', audio: 'assets/audio/upon.mp3' },
  { word: 'The world upon your shoulders', emoji: '🌍⬆️🫵➡️🤷🤷', audio: 'assets/audio/the_world_upon_your_shoulders.mp3' },

  // Adjetivo
  { word: 'Sad', emoji: '🥺', audio: 'assets/audio/sad.mp3' },
  { word: 'A sad song', emoji: '🥺🎶', audio: 'assets/audio/a_sad_song.mp3' },
  { word: "it's a fool", emoji: '👤⚙️🤡', audio: "assets/audio/it's_a_fool.mp3" },
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonBadge,
    IonText,
  ],
})
export class Tab1Page {
  // Cria uma referência ao elemento de áudio
  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef>;

  words: Word[] = WORDS;
  index = 0;
  reindex = 0;
  correct = true;
  isLastCorrectAnswer = true;

  get currentWord(): Word {
    let currentWord: Word = WORDS[this.index];
    return currentWord;
  }

  handleResponse(answer: boolean) {
    if (this.correct && answer) {
      this.index++;
      this.reindex = 0;
      this.correct = false;
      this.isLastCorrectAnswer = true;
      // this.negation = Math.random() < 0.5;
    } else if (!this.correct && !answer) {
      this.reindex++;
      this.correct = this.reindex === this.index;
      this.isLastCorrectAnswer = true;
      // this.negation = Math.random() < 0.5;
    } else {
      this.reindex = 0;
      // this.correct = Math.random() < 0.5;
      console.info('Errou');
      this.index = Math.max(this.index - 1, 0);
      this.correct = true;
      this.isLastCorrectAnswer = false;
    }
  }
  playAudio(audioSrc: string) {
    const audioElement = this.audioPlayers.find(
      (player) => player.nativeElement.src === audioSrc
    )?.nativeElement;
    if (audioElement) {
      audioElement.play();
    }
  }
}
