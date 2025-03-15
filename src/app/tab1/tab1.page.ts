import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge,
  IonProgressBar,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { WORDS } from 'src/assets/data/words';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    FormsModule,
    NgIf,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonBadge,
    IonProgressBar,
    IonItem,
    IonInput,
  ],
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('wordCard', { static: false }) wordCard!: any;
  @ViewChild('audioButton', { static: false }) audioButton!: any;
  @ViewChild('userIonInput') userIonInput!: IonInput;

  words = WORDS;
  currentIndex = 29;
  userInput = '';
  feedback = '';
  answered = false;
  correct = false;

  ngAfterViewInit() {
    document.body.addEventListener('click', this.handleFirstClick.bind(this), {
      once: true,
    });
    gsap.from(this.wordCard.el, {
      duration: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: 'back.out(1.7)',
    });
  }

  ionViewDidEnter() {
    this.playAudio();
  }

  handleFirstClick() {
    this.playAudio();
  }

  get currentWord() {
    return this.words[this.currentIndex];
  }

  // Definindo as fases com base no índice atual.
  get currentPhase() {
    if (this.currentIndex < 5) return '1';
    else if (this.currentIndex < 12) return '2';
    else if (this.currentIndex < 17) return '3';
    else if (this.currentIndex < 37) return '4';
    else return '5';
  }

  // Define o título da fase
  get currentSection() {
    if (this.currentIndex < 5) return 'Heart';
    else if (this.currentIndex < 12) return 'Found';
    else if (this.currentIndex < 17) return 'Song';
    else if (this.currentIndex < 29) return 'Skin';
    else if (this.currentIndex < 37) return 'Afraid';
    else return 'Final';
  }

  get gameCompleted() {
    return this.currentIndex >= this.words.length;
  }

  // Método para verificar se a pergunta atual é a última da lição
  isLastQuestionOfPhase(): boolean {
    if (this.currentIndex < 5) {
      return this.currentIndex === 4;
    } else if (this.currentIndex < 12) {
      return this.currentIndex === 11;
    } else if (this.currentIndex < 17) {
      return this.currentIndex === 16;
    } else if (this.currentIndex < 37) {
      return this.currentIndex === 36;
    } else {
      return this.currentIndex === this.words.length - 1;
    }
  }

  playAudio() {
    const audio = new Audio(this.currentWord.audio);
    audio.play();
    gsap.from(this.audioButton.el, {
      duration: 0.25,
      opacity: 0,
      scale: 0.8,
      ease: 'back.out(1.7)',
    });
  }

  shake() {
    // Animação de feedback de erro: shake no cartão
    gsap.to(this.wordCard.el, {
      x: 10,
      duration: 0.1,
      yoyo: true,
      repeat: 5,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(this.wordCard.el, { x: 0, duration: 0.1 });
      },
    });
  }

  checkAnswer() {
    if (!this.userInput) {
      this.feedback = 'Please enter a word.';
      this.shake();
      this.userIonInput.setFocus();
      return;
    }
    // Compara ignorando caixa e espaços
    if (
      this.userInput.trim().toLowerCase() ===
      this.currentWord.word.toLowerCase()
    ) {
      // Right!
      this.feedback = '';
      this.correct = true;
      this.answered = true;
      this.nextWord();
    } else {
      this.feedback = 'Wrong! Try again.';
      this.correct = false;
      this.shake();
      this.userIonInput.setFocus();
    }
  }

  nextWord() {
    // Animação de transição: fade out do cartão atual
    gsap.to(this.wordCard.el, {
      duration: 0.1,
      opacity: 0,
      onComplete: () => {
        this.currentIndex++;
        this.userInput = '';
        this.feedback = '';
        this.answered = false;
        this.correct = false;
        // Se houver próxima palavra, animação de fade in com escala
        if (!this.gameCompleted) {
          gsap.fromTo(
            this.wordCard.el,
            { opacity: 0, scale: 0.5 },
            {
              duration: 0.3,
              opacity: 1,
              scale: 1,
              ease: 'back.out(1.7)',
              onComplete: () => {
                this.playAudio();
                this.userIonInput.setFocus();
              },
            }
          );
        }
      },
    });
  }
}
