import { Word } from "src/app/interfaces/word";

export const WORDS: Word[] = [
  // Phase 1: Heart
  { word: 'Heart', emoji: '❤️', audio: 'assets/audio/heart.mp3' },
  { word: 'Your', emoji: '🫵➡️', audio: 'assets/audio/your.mp3' },
  { word: 'Your heart', emoji: '🫵➡️❤️', audio: 'assets/audio/your_heart.mp3' },
  { word: 'Into', emoji: '🤲', audio: 'assets/audio/into.mp3' },
  {
    word: 'Into your heart',
    emoji: '🤲🫵➡️❤️',
    audio: 'assets/audio/into_your_heart.mp3',
  },

  // Phase 2: Found
  { word: 'You', emoji: '🫵', audio: 'assets/audio/you.mp3' },
  { word: 'Have', emoji: '✅', audio: 'assets/audio/have.mp3' },
  { word: 'You have', emoji: '🫵✅', audio: 'assets/audio/you_have.mp3' },
  { word: 'Found', emoji: '🔍', audio: 'assets/audio/found.mp3' },
  { word: 'Her', emoji: '👩➡️', audio: 'assets/audio/her.mp3' },
  { word: 'Found her', emoji: '🔍👩➡️', audio: 'assets/audio/found_her.mp3' },
  { word: 'You have found her', emoji: '📍', audio: 'assets/audio/you_have_found_her.mp3' },

  // Phase 3: Song
  { word: 'Song', emoji: '🎶', audio: 'assets/audio/song.mp3' },
  { word: 'Sad', emoji: '🥺', audio: 'assets/audio/sad.mp3' },
  { word: 'A sad song', emoji: '🥺🎶', audio: 'assets/audio/a_sad_song.mp3' },
  { word: 'Take', emoji: '🫴', audio: 'assets/audio/take.mp3' },
  {
    word: 'Take a sad song',
    emoji: '🫴🥺🎶',
    audio: 'assets/audio/take_a_sad_song.mp3',
  },

  // Phase 4: Skin
  { word: 'Skin', emoji: '🧴', audio: 'assets/audio/skin.mp3' },
  { word: 'Your skin', emoji: '🫵➡️🧴', audio: 'assets/audio/your_skin.mp3' },
  { word: 'Under', emoji: '🔽', audio: 'assets/audio/under.mp3' },
  {
    word: 'Under your skin',
    emoji: '🔽🫵➡️🧴',
    audio: 'assets/audio/under_your_skin.mp3',
  },
  { word: 'Let', emoji: '🔓', audio: 'assets/audio/let.mp3' },
  { word: 'Her', emoji: '👦➡️', audio: 'assets/audio/her.mp3' },
  { word: 'Let her', emoji: '🔓👦➡️', audio: 'assets/audio/letter.mp3' },
  {
    word: 'Let her into your heart',
    emoji: '🔓🫵➡️❤️',
    audio: 'assets/audio/letter_into_your_heart.mp3',
  },
  {
    word: 'Let her under your skin',
    emoji: '🔓🫵➡️🧴',
    audio: 'assets/audio/letter_under_your_skin.mp3',
  },
  {
    word: 'Take a sad song. You have found her. Let her into your heart. Let her under your skin.',
    emoji: '🎶💖',
    audio: 'assets/audio/take_a_sad_song._you_have_found_her._letter_into_your_heart._letter_under_your_skin.mp3',
  },
];
