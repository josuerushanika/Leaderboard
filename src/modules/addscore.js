import htmldisplay from './htmldisplay.js';

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
    htmldisplay(newScore);
    CreateScore.clear();
  }
};

export default addNewScore;
