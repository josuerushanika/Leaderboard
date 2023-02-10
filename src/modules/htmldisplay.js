const table = document.querySelector('.table');

const htmldisplay = (data) => {
  // console.log('data', data);

  // const tablerow = document.createElement('tr');
  // data.forEach((item) => {
  //   tablerow.innerHTML = `
  //   <td>${item.user} : ${item.score}</td>
  //   `;
  //   table.appendChild(tablerow);
  // });

  // const tablerow = document.createElement('tr');
  // data.forEach((item) => {
  //   tablerow.innerHTML = `
  //   <td>${item.user} : ${item.score}</td>
  //   `;
  //   table.appendChild(tablerow);
  // });

  for (let i = 0; i < data.length; i += 1) {
    const tablerow = document.createElement('tr');
    tablerow.innerHTML = `
      <td>${data[i].user} : ${data[i].score}</td>
    `;
    table.appendChild(tablerow);
  }

  // const tablerow = document.createElement('tr');
  // tablerow.innerHTML = `
  //   <td>${newScore.user} : ${newScore.score}</td>
  //   `;
  // table.appendChild(tablerow);
};

export default htmldisplay;
