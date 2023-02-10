import './style.css';
import { getScore, PostScore } from './modules/MethodsAPI.js';

const submit = document.querySelector('#submit');
const refreshbtn = document.querySelector('#refresh');
const nameScore = document.querySelector('#name');
const score = document.querySelector('#score');

submit.addEventListener('click', (e) => {
  const newPlayer = {
    user: nameScore.value,
    score: score.value,
  };

  if (newPlayer.user === '' || newPlayer.score === '') return;
  e.preventDefault();

  PostScore(newPlayer);
  nameScore.value = '';
  score.value = '';
});

refreshbtn.addEventListener('click', () => {
  getScore();
});

window.onload = () => {
  getScore();
};