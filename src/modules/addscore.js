// import htmldisplay from './htmldisplay.js';
import { PostScore } from './MethodsAPI.js';

const nameScore = document.querySelector('#name');
const score = document.querySelector('#score');
export const form = document.querySelector('form');

class CreateScore {
  constructor(yourName, yourScore) {
    this.yourName = yourName;
    this.yourScore = yourScore;
  }

  static clear() {
    nameScore.value = '';
    score.value = '';
  }
}

const addNewScore = () => {
  if (nameScore.value && score.value >= 0) {
    const newScore = new CreateScore(nameScore.value, score.value);
    // console.log('myGame', newScore);
    PostScore(newScore);
    // htmldisplay(newScore);
    CreateScore.clear();
  }
};

export default addNewScore;
