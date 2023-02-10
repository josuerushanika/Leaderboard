// import htmldisplay from './htmldisplay.js';
import { PostScore } from './MethodsAPI.js';
// import { getScore } from './MethodsAPI.js';

const nameScore = document.querySelector('#name');
const score = document.querySelector('#score');
export const form = document.querySelector('form');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  console.log('Testing');

  const newPlayer = {
    user: nameScore.value,
    score: score.value,
  };
  event.preventDefault();
  PostScore(newPlayer);
});

// class CreateScore {
//   constructor(yourName, yourScore) {
//     this.yourName = yourName;
//     this.yourScore = yourScore;
//   }

//   static clear() {
//     nameScore.value = '';
//     score.value = '';
//   }
// }

// const addNewScore = () => {
//   console.log('mynamscore', nameScore, score);
//   if (nameScore.value && score.value >= 0) {
//     const newScore = new CreateScore(nameScore.value, score.value);

//     PostScore(newScore);
//     // htmldisplay(newScore);
//     CreateScore.clear();
//   }
// };

//export default addNewScore;
