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
  audio: string;
};

export const WORDS: Word[] = [
  // Substantivos
  { word: 'Song', emoji: '🎶', audio: 'assets/audio/song.mp3' },
  { word: 'Sad', emoji: '🥺', audio: 'assets/audio/sad.mp3' },
  { word: 'A sad song', emoji: '🥺🎶', audio: 'assets/audio/a_sad_song.mp3' },
  { word: 'Take', emoji: '🫴', audio: 'assets/audio/take.mp3' },
  { word: "Take a sad song", emoji: '⛔⚙️', audio: "assets/audio/take_a_sad_song.mp3" },
  
  { word: 'Heart', emoji: '❤️', audio: 'assets/audio/heart.mp3' },
  { word: 'Skin', emoji: '🎶', audio: 'assets/audio/skin.mp3' },

  // Advérbio
  { word: 'Then', emoji: '⤴️', audio: 'assets/audio/then.mp3' },
  { word: 'So', emoji: '⤴️', audio: 'assets/audio/so.mp3' },
  { word: 'Now', emoji: '⤴️', audio: 'assets/audio/now.mp3' },
  { word: 'Out', emoji: '⤴️', audio: 'assets/audio/out.mp3' },
  { word: 'In', emoji: '⤴️', audio: 'assets/audio/in.mp3' },

  // Pronomes
  { word: 'It', emoji: '🐾', audio: 'assets/audio/it.mp3' },
  { word: 'You', emoji: '🫵', audio: 'assets/audio/you.mp3' },
  { word: 'Her', emoji: '👦➡️', audio: 'assets/audio/her.mp3' },
  { word: 'Your', emoji: '🫵➡️', audio: 'assets/audio/your.mp3' },
  { word: 'Me', emoji: '🫵➡️', audio: 'assets/audio/me.mp3' },
  { word: 'Then you', emoji: '⤴️🫵', audio: 'assets/audio/then_you.mp3' },
  { word: 'Your heart', emoji: '🫵➡️❤️', audio: 'assets/audio/your_heart.mp3' },

  // Preposição
  { word: 'Into', emoji: '🤲', audio: 'assets/audio/into.mp3' },
  { word: 'Down', emoji: '⬇️', audio: 'assets/audio/down.mp3' },
  { word: 'Under', emoji: '🔽', audio: 'assets/audio/under.mp3' },
  { word: 'Into your heart', emoji: '🤲🫵➡️❤️', audio: 'assets/audio/into_your_heart.mp3' },
  { word: 'Me down', emoji: '🤲🫵➡️❤️', audio: 'assets/audio/me_down.mp3' },
  { word: 'Under your', emoji: '🤲🫵➡️❤️', audio: 'assets/audio/me_down.mp3' },

  // Adjetivo
  { word: 'Bad', emoji: '👎', audio: 'assets/audio/bad.mp3' },
  { word: 'Found', emoji: '🥺', audio: 'assets/audio/found.mp3' },
  { word: 'It bad', emoji: '🐾👎', audio: 'assets/audio/it_bad.mp3' },
  { word: 'Better', emoji: '👍', audio: 'assets/audio/better.mp3' },
  { word: 'It better', emoji: '🐾👍', audio: 'assets/audio/it_better.mp3' },
  { word: 'Found her', emoji: '🐾👍', audio: 'assets/audio/found_her.mp3' },

  // Conjunção
  { word: 'And', emoji: '➕', audio: 'assets/audio/and.mp3' },

  //Verbo
  { word: "Don't", emoji: '⛔', audio: "assets/audio/don't.mp3" },
  { word: 'To make', emoji: '🛠️', audio: 'assets/audio/to_make.mp3' },
  { word: 'Can', emoji: '💪', audio: 'assets/audio/can.mp3' },
  { word: 'Have', emoji: '💪', audio: 'assets/audio/have.mp3' },
  { word: 'Start', emoji: '▶️', audio: 'assets/audio/start.mp3' },
  { word: 'Go', emoji: '▶️', audio: 'assets/audio/go.mp3' },
  { word: 'Get', emoji: '▶️', audio: 'assets/audio/get.mp3' },
  { word: 'Let', emoji: '🔓', audio: 'assets/audio/let.mp3' },
  { word: 'Remember', emoji: '🤲', audio: 'assets/audio/remember.mp3' },
  { word: 'Begin', emoji: '🤲', audio: 'assets/audio/begin.mp3' },
  { word: "Don't Make", emoji: '⛔⚙️', audio: "assets/audio/don't_make.mp3" },
  { word: "Make better", emoji: '⛔⚙️', audio: "assets/audio/make_better.mp3" },
  { word: "You have", emoji: '⛔⚙️', audio: "assets/audio/make_better.mp3" },
  { word: 'Can start', emoji: '💪▶️', audio: 'assets/audio/can_start.mp3' },
  { word: 'Make it', emoji: '🛠️🐾', audio: 'assets/audio/make_it.mp3' },
  { word: 'Then you can', emoji: '🫵⚙️', audio: 'assets/audio/then_you_can.mp3' },
  { word: 'And make', emoji: '⚙️', audio: 'assets/audio/and_make.mp3' },
  { word: 'Let her', emoji: '🔓👦➡️', audio: 'assets/audio/letter.mp3' },
  { word: 'Let out', emoji: '🔓👦➡️', audio: 'assets/audio/let_out.mp3' },
  { word: 'And let in', emoji: '🔓👦➡️', audio: 'assets/audio/and_let_in.mp3' },
  { word: 'Now go', emoji: '🔓👦➡️', audio: 'assets/audio/now_go.mp3' },
  { word: 'Get her', emoji: '🔓👦➡️', audio: 'assets/audio/get_her.mp3' },

  //Frases
  { word: "Don't make it bad", emoji: '⛔⚙️', audio: "assets/audio/don't_make_it_bad.mp3" },
  { word: "Don't let me down", emoji: '⛔⚙️', audio: "assets/audio/don't_make_it_bad.mp3" },
  { word: "You have found her", emoji: '⛔⚙️', audio: "assets/audio/take_a_sad_song.mp3" },
  { word: "And make it better", emoji: '⛔⚙️', audio: "assets/audio/and_make_it_better.mp3" },
  { word: "Now go and get her", emoji: '⛔⚙️', audio: "assets/audio/and_make_it_better.mp3" },
  { word: "To let her into your heart", emoji: '⛔⚙️', audio: "assets/audio/to_letter_into_your_heart.mp3" },
  { word: "To let her under your skin", emoji: '⛔⚙️', audio: "assets/audio/to_letter_into_your_heart.mp3" },
  { word: "So let it out and let it in", emoji: '⛔⚙️', audio: "assets/audio/to_letter_into_your_heart.mp3" },
  { word: "Then you can start", emoji: '⛔⚙️', audio: "assets/audio/then_you_can_start.mp3" },
  { word: "To make it better", emoji: '⛔⚙️', audio: "assets/audio/don't_make.mp3" },

  //Estrofe
  // { word: "Don't make it bad. Take a sad song, and make it better. Remember. To let her into your heart. Then you can start, to make it better.", emoji: '🎶💖', audio: "assets/audio/don't_make_it_bad._take_a_sad_song,_and_make_it_better._remember._to_letter_into_your_heart._then_you_can_start,_to_make_it_better.mp3" },
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
