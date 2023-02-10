import './style.css';
import { getScore, PostScore } from './modules/MethodsAPI.js';
// import addScore from './modules/addscore.js';

const submit = document.querySelector('#submit');
const refreshbtn = document.querySelector('#refresh');
const nameScore = document.querySelector('#name');
const score = document.querySelector('#score');

submit.addEventListener('click', (e) => {
  console.log('Testing');
  const newPlayer = {
    user: nameScore.value,
    score: score.value,
  };
  e.preventDefault();
  PostScore(newPlayer);
  nameScore.value = '';
  score.value = '';
  // if (nameScore.value && score.value >= 0) {
  // }
});

refreshbtn.addEventListener('click', () => {
  getScore();
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   addNewScore();
//   console.log('My event', event);
// });

window.onload = () => {
  getScore();
};