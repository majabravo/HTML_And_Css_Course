let myNameArray = [
  "Boban Srezovski",
  "Ljupcho Shemov",
  "Ljupco Trajanovski",
  "Ilija Trajkovski",
  "Ilija Meloski",
];

myNameArray.forEach((element, index) => {
  addRow(element, index);
});

document.getElementById("addNew").addEventListener("click", addFriend);
function addFriend() {
  let userInput = document.getElementById("friendName").value;
  if (userInput !== "") {
    let arrLenght = myNameArray.push(userInput);
    addRow(userInput, arrLenght - 1);
  }
}

function addRow(name, index) {
  function vote() {
    let vote = this.children[2].innerText;
    this.children[2].innerText = parseInt(vote) + 1;
  }

  let tableRow = document.createElement("tr");
  tableRow.addEventListener("click", vote);

  let tdIndex = document.createElement("td");
  tdIndex.innerText = index + 1;
  let tdName = document.createElement("td");
  tdName.innerText = name;
  let tdVote = document.createElement("td");
  tdVote.innerText = 0;

  tableRow.appendChild(tdIndex);
  tableRow.appendChild(tdName);
  tableRow.appendChild(tdVote);
  document.getElementById("output").appendChild(tableRow);
}
