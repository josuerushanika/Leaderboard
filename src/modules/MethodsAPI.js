import htmldisplay from './htmldisplay.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygzvsig2RDHlS9A3YwuH/scores';

export const postScore = async (newPlayer) => {
  const postResponse = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: newPlayer.user, score: newPlayer.score }),
  });

  const response = await postResponse.json();
  return response;
};

export const getScore = async () => {
  const get = await fetch(baseUrl);
  const response = await get.json();

  const sortedGameData = response.result.sort((a, b) => b.score - a.score);
  htmldisplay(sortedGameData);
};
