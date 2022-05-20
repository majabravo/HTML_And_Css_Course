let myTable = [];

let numberOfRows = prompt("Enter number of rows: ");
numberOfRows = Number(numberOfRows);
let numberOfColums = prompt("Enter number of colums: ");
numberOfColums = Number(numberOfColums);

for (let row = 0; row < numberOfRows; row++) {
  myTable.push([]);
  for (let col = 0; col < numberOfColums; col++) {
    myTable[row].push(`Row ${row} Col ${col}`);
  }
}

console.table(myTable);
