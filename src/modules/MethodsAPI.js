import htmldisplay from './htmldisplay.js';

// const bse_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U3TWwe12M2uodMhrlkNp/scores';

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

  //   if (post.status !== 200) {
  //     throw new Error('You can POST your data here.');
  //   }
  const response = await post.json();
  return response;
};

export const getScore = async () => {
  try {
    const get = await fetch(baseUrl);
    // if (get.status !== 200) {
    //   throw new Error('You can GET your data here');
    // }
    const response = await get.json();
    console.log('myResponse', response.result);
    const sortedGameData = response.result.sort((a, b) => b.score - a.score);
    htmldisplay(sortedGameData);
  } catch (err) {
    console.log(err.message);
  }
};
