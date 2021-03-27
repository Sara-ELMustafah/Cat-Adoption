let col1 = [];
let col2 = [];
let col3 = [];
let col4 = [];

let rowNum = 1;
let index = 0;

function FormToTable() {

    let insertedCats = document.getElementById('DisplayForm');
    let newRow = insertedCats.insertRow(rowNum);

    col1[index] = document.getElementById('tname').value;
    col2[index] = document.getElementById('tbreed').value;
    col3[index] = document.getElementById('tage').value;
    col4[index] = document.getElementById('tcolor').value;

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = col1[index];
    cell2.innerHTML = col2[index];
    cell3.innerHTML = col3[index];
    cell4.innerHTML = col4[index];

    rowNum++;
    index++;

    document.getElementById('tname').value = "";
    document.getElementById('tbreed').value = "";
    document.getElementById('tage').value = "";
    document.getElementById('tcolor').value = "";
}