import './style.css';
import { getScore } from './modules/MethodsAPI.js';

const refreshbtn = document.querySelector('#refresh');

refreshbtn.addEventListener('click', () => {
  window.location.reload();
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   addNewScore();
//   console.log('My event', event);
// });

window.onload = () => {
  getScore();
};