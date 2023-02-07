const table = document.querySelector('.table');

const htmldisplay = (newScore) => {
  const tablerow = document.createElement('tr');
  tablerow.innerHTML = `
    <td>${newScore.yourName} : ${newScore.yourScore}</td>
    `;
  table.appendChild(tablerow);
};

export default htmldisplay;
