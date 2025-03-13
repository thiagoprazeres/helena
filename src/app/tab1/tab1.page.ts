import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
interface Word {
  word: string;
  emoji: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent],
})
export class Tab1Page {
  words: Word[] = [
    // Frutas (1-15)
    { word: 'Apple', emoji: '🍏' },
    { word: 'Banana', emoji: '🍌' },
    { word: 'Orange', emoji: '🍊' },
    { word: 'Strawberry', emoji: '🍓' },
    { word: 'Watermelon', emoji: '🍉' },
    { word: 'Grapes', emoji: '🍇' },
    { word: 'Pineapple', emoji: '🍍' },
    { word: 'Mango', emoji: '🥭' },
    { word: 'Cherry', emoji: '🍒' },
    { word: 'Lemon', emoji: '🍋' },
    { word: 'Kiwi', emoji: '🥝' },
    { word: 'Coconut', emoji: '🥥' },
    { word: 'Peach', emoji: '🍑' },
    { word: 'Pear', emoji: '🍐' },
    { word: 'Blueberry', emoji: '🫐' },

    // Animais (16-35)
    { word: 'Dog', emoji: '🐶' },
    { word: 'Cat', emoji: '🐱' },
    { word: 'Mouse', emoji: '🐭' },
    { word: 'Rabbit', emoji: '🐰' },
    { word: 'Bear', emoji: '🐻' },
    { word: 'Panda', emoji: '🐼' },
    { word: 'Koala', emoji: '🐨' },
    { word: 'Tiger', emoji: '🐯' },
    { word: 'Lion', emoji: '🦁' },
    { word: 'Cow', emoji: '🐮' },
    { word: 'Pig', emoji: '🐷' },
    { word: 'Frog', emoji: '🐸' },
    { word: 'Monkey', emoji: '🐒' },
    { word: 'Elephant', emoji: '🐘' },
    { word: 'Chicken', emoji: '🐔' },
    { word: 'Penguin', emoji: '🐧' },
    { word: 'Dolphin', emoji: '🐬' },
    { word: 'Whale', emoji: '🐳' },
    { word: 'Shark', emoji: '🦈' },
    { word: 'Octopus', emoji: '🐙' },

    // Veículos (36-47)
    { word: 'Car', emoji: '🚗' },
    { word: 'Bus', emoji: '🚌' },
    { word: 'Train', emoji: '🚆' },
    { word: 'Airplane', emoji: '✈️' },
    { word: 'Bicycle', emoji: '🚲' },
    { word: 'Motorcycle', emoji: '🏍️' },
    { word: 'Ship', emoji: '🚢' },
    { word: 'Tractor', emoji: '🚜' },
    { word: 'Helicopter', emoji: '🚁' },
    { word: 'Rocket', emoji: '🚀' },
    { word: 'Taxi', emoji: '🚕' },
    { word: 'Truck', emoji: '🚚' },

    // Natureza (48-64)
    { word: 'Sun', emoji: '☀️' },
    { word: 'Moon', emoji: '🌙' },
    { word: 'Star', emoji: '⭐' },
    { word: 'Cloud', emoji: '☁️' },
    { word: 'Rainbow', emoji: '🌈' },
    { word: 'Snowflake', emoji: '❄️' },
    { word: 'Lightning', emoji: '⚡' },
    { word: 'Fire', emoji: '🔥' },
    { word: 'Water', emoji: '💧' },
    { word: 'Earth', emoji: '🌍' },
    { word: 'Mountain', emoji: '⛰️' },
    { word: 'Volcano', emoji: '🌋' },
    { word: 'Tree', emoji: '🌳' },
    { word: 'Flower', emoji: '🌸' },
    { word: 'Leaf', emoji: '🍁' },
    { word: 'Cactus', emoji: '🌵' },
    { word: 'Mushroom', emoji: '🍄' },

    // Comidas (65-83)
    { word: 'Pizza', emoji: '🍕' },
    { word: 'Hamburger', emoji: '🍔' },
    { word: 'Hotdog', emoji: '🌭' },
    { word: 'Taco', emoji: '🌮' },
    { word: 'Sandwich', emoji: '🥪' },
    { word: 'Sushi', emoji: '🍣' },
    { word: 'Ice Cream', emoji: '🍨' },
    { word: 'Cake', emoji: '🍰' },
    { word: 'Cookie', emoji: '🍪' },
    { word: 'Donut', emoji: '🍩' },
    { word: 'Bread', emoji: '🍞' },
    { word: 'Fries', emoji: '🍟' },
    { word: 'Popcorn', emoji: '🍿' },
    { word: 'Chocolate', emoji: '🍫' },
    { word: 'Egg', emoji: '🍳' },
    { word: 'Steak', emoji: '🥩' },
    { word: 'Fried Chicken', emoji: '🍗' },
    { word: 'Rice', emoji: '🍚' },
    { word: 'Spaghetti', emoji: '🍝' },

    // Atividades (84-99)
    { word: 'Book', emoji: '📖' },
    { word: 'Musical Note', emoji: '🎵' },
    { word: 'Soccer Ball', emoji: '⚽' },
    { word: 'Basketball', emoji: '🏀' },
    { word: 'Tennis', emoji: '🎾' },
    { word: 'Video Game', emoji: '🎮' },
    { word: 'Camera', emoji: '📷' },
    { word: 'Microphone', emoji: '🎤' },
    { word: 'Paint Palette', emoji: '🎨' },
    { word: 'Computer', emoji: '💻' },
    { word: 'Phone', emoji: '📱' },
    { word: 'Clock', emoji: '⏰' },
    { word: 'Light Bulb', emoji: '💡' },
    { word: 'Gift', emoji: '🎁' },
    { word: 'Trophy', emoji: '🏆' },
    { word: 'Medal', emoji: '🥇' },

    // Emoções (100-109)
    { word: 'Heart', emoji: '❤️' },
    { word: 'Smiley', emoji: '🙂' },
    { word: 'Crying', emoji: '😢' },
    { word: 'Angry', emoji: '😡' },
    { word: 'Laughing', emoji: '😂' },
    { word: 'Winking', emoji: '😉' },
    { word: 'Sunglasses', emoji: '😎' },
    { word: 'Surprised', emoji: '😲' },
    { word: 'Confused', emoji: '😕' },
    { word: 'Thinking', emoji: '🤔' },

    // Diversos (110-125)
    { word: 'Key', emoji: '🔑' },
    { word: 'Lock', emoji: '🔒' },
    { word: 'Scissors', emoji: '✂️' },
    { word: 'Pen', emoji: '🖊️' },
    { word: 'Pencil', emoji: '✏️' },
    { word: 'Paper', emoji: '📄' },
    { word: 'Envelope', emoji: '✉️' },
    { word: 'Briefcase', emoji: '💼' },
    { word: 'Wallet', emoji: '👛' },
    { word: 'Watch', emoji: '⌚' },
    { word: 'Crown', emoji: '👑' },
    { word: 'Diamond', emoji: '💎' },
    { word: 'Bomb', emoji: '💣' },
    { word: 'Magnet', emoji: '🧲' },
    { word: 'Shopping Cart', emoji: '🛒' },
    { word: 'Umbrella', emoji: '☔' },

    // Tecnologia/Gadgets (126-135)
    { word: 'Battery', emoji: '🔋' },
    { word: 'Flashlight', emoji: '🔦' },
    { word: 'Television', emoji: '📺' },
    { word: 'Radio', emoji: '📻' },
    { word: 'Headphones', emoji: '🎧' },
    { word: 'Speaker', emoji: '🔊' },
    { word: 'Printer', emoji: '🖨️' },
    { word: 'Computer Mouse', emoji: '🖱️' },
    { word: 'Diskette', emoji: '💾' },
    { word: 'File Folder', emoji: '📁' },

    // Estações do Ano (136-139)
    { word: 'Spring', emoji: '🌱' },
    { word: 'Summer', emoji: '🌞' },
    { word: 'Autumn', emoji: '🍂' },
    { word: 'Winter', emoji: '⛄' },

    // Esportes (140-150)
    { word: 'Baseball', emoji: '⚾' },
    { word: 'Football', emoji: '🏈' },
    { word: 'Rugby', emoji: '🏉' },
    { word: 'Golf', emoji: '⛳' },
    { word: 'Volleyball', emoji: '🏐' },
    { word: 'Cricket', emoji: '🏏' },
    { word: 'Bowling', emoji: '🎳' },
    { word: 'Skating', emoji: '⛸️' },
    { word: 'Surfing', emoji: '🏄‍♂️' },
    { word: 'Skiing', emoji: '🎿' },
    { word: 'Boxing', emoji: '🥊' },

    // Lugares/Viagens (151-160)
    { word: 'House', emoji: '🏠' },
    { word: 'Apartment', emoji: '🏢' },
    { word: 'Hospital', emoji: '🏥' },
    { word: 'School', emoji: '🏫' },
    { word: 'Bank', emoji: '🏦' },
    { word: 'Church', emoji: '⛪' },
    { word: 'Castle', emoji: '🏰' },
    { word: 'Stadium', emoji: '🏟️' },
    { word: 'Park', emoji: '🏞️' },
    { word: 'Factory', emoji: '🏭' },

    // Símbolos/Sinais (161-170)
    { word: 'Check Mark', emoji: '✅' },
    { word: 'Cross Mark', emoji: '❌' },
    { word: 'Question Mark', emoji: '❓' },
    { word: 'Exclamation', emoji: '❗' },
    { word: 'Arrow Right', emoji: '➡️' },
    { word: 'Arrow Left', emoji: '⬅️' },
    { word: 'Arrow Up', emoji: '⬆️' },
    { word: 'Arrow Down', emoji: '⬇️' },
    { word: 'Recycling', emoji: '♻️' },
    { word: 'Peace', emoji: '✌️' },

    // Espaço (171-175)
    { word: 'Planet', emoji: '🪐' },
    { word: 'Comet', emoji: '☄️' },
    { word: 'Satellite', emoji: '🛰️' },
    { word: 'Astronaut', emoji: '👩‍🚀' },
    { word: 'Telescope', emoji: '🔭' },

    // Ciência/Educação (176-183)
    { word: 'Microscope', emoji: '🔬' },
    { word: 'Test Tube', emoji: '🧪' },
    { word: 'DNA', emoji: '🧬' },
    { word: 'Graduation Cap', emoji: '🎓' },
    { word: 'Scroll', emoji: '📜' },
    { word: 'Abacus', emoji: '🧮' },
    { word: 'Globe', emoji: '🌐' },
    { word: 'Atom', emoji: '⚛️' },

    // Diversos Adicionais (184-191)
    { word: 'Map', emoji: '🗺️' },
    { word: 'Compass', emoji: '🧭' },
    { word: 'Candle', emoji: '🕯️' },
    { word: 'Fireworks', emoji: '🎆' },
    { word: 'Sparkler', emoji: '🎇' },
    { word: 'Balloon', emoji: '🎈' },
    { word: 'Party Popper', emoji: '🎉' },
    { word: 'Confetti Ball', emoji: '🎊' },

    // Música & Entretenimento (192-200)
    { word: 'Musical Keyboard', emoji: '🎹' },
    { word: 'Saxophone', emoji: '🎷' },
    { word: 'Guitar', emoji: '🎸' },
    { word: 'Violin', emoji: '🎻' },
    { word: 'Trumpet', emoji: '🎺' },
    { word: 'Drum', emoji: '🥁' },
    { word: 'Film Camera', emoji: '🎥' },
    { word: 'Clapper Board', emoji: '🎬' },
    { word: 'Shopping Bag', emoji: '🛍️' },
  ];



  index = 0;
  currentWord: Word = this.words[this.index];
  correct = true;
  isLastCorrectAnswer = true;

  setCurrentWord(): void {
    this.currentWord = this.words[this.index];
    this.index++;
    this.currentWord = this.words[this.index];
    this.correct = Math.random() < 0.5;
    if (!this.correct) {
      this.currentWord.emoji = this.words[this.index + 1].emoji;
    }
  }

  handleResponse(answer: boolean) {
    if ((this.correct && answer) || (!this.correct && !answer)) {
      this.setCurrentWord();
      this.isLastCorrectAnswer = true;
      // this.negation = Math.random() < 0.5;
    } else {
      console.info('Errou');
      this.index = Math.max(this.index - 1, 0);
      console.log(this.words[this.index]);
      this.correct = true;
      this.currentWord = this.words[this.index];
      this.isLastCorrectAnswer = false;
    }
  }
}
