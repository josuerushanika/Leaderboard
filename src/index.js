import './style.css';
import addNewScore, { form } from './modules/addscore.js';
import { getScore } from './modules/MethodsAPI.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewScore();
});

window.onload = () => {
  getScore();
  
};