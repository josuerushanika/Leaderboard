const table = document.querySelector('.table');

const htmldisplay = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const tablerow = document.createElement('tr');
    tablerow.innerHTML = `
      <td>${data[i].user} : ${data[i].score}</td>
    `;
    table.appendChild(tablerow);
  }
};

export default htmldisplay;
