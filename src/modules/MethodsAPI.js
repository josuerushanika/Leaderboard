import htmldisplay from './htmldisplay.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygzvsig2RDHlS9A3YwuH/scores';

export const PostScore = async (newPlayer) => {
  console.log('myPlayer', newPlayer);
  const post = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: newPlayer.user, score: newPlayer.score }),
  });
  console.log('Getpost', post);

  const response = await post.json();
  return response;
};

export const getScore = async () => {
  try {
    const get = await fetch(baseUrl);
    const response = await get.json();
    console.log('myResponse', response.result);
    const sortedGameData = response.result.sort((a, b) => b.score - a.score);
    htmldisplay(sortedGameData);
  } catch (err) {
    console.log(err.message);
  }
};
