import './style.css';
import addNewScore, { form } from './modules/addscore.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewScore();
});