// window -> controls the behaviour of browser
// document -> used to manipulate the HTML page
// DOM -> Document Object Model

window.addEventListener('DOMContentLoaded', () => {

  const numArray = [5, 7, 9, 12, 9, 18, 45, 77, 11, 2];

  const txtbox = document.querySelector('#txtbox');
  const btnAdd = document.querySelector('#btnAdd');
  const btnEdit = document.querySelector('#btnEdit');
  const btnDelete = document.querySelector('#btnDelete');
  const btnSOP = document.querySelector('#btnSOP');
  const btnViewAll = document.querySelector('#btnViewAll');
  const sp = document.querySelector('#sp');
  const output = document.querySelector('#output');

  txtbox.addEventListener('blur', () => {

    let numEntered = txtbox.value;

    for (let i = 0; i < numArray.length; i++) {
      if (numEntered == numArray[i]) {
        console.log("if");
        btnEdit.disabled = false;
        btnDelete.disabled = false;
        btnAdd.disabled = true;
        sp.innerHTML = "Present";
        break;
      } else {
        console.log("else");
        btnEdit.disabled = true;
        btnDelete.disabled = true;
        btnAdd.disabled = false;
        sp.innerHTML = "Not Present"
      }
    }
  });

  btnAdd.addEventListener('click', () => {

    numArray.push(txtbox.value);
    btnEdit.disabled = true;
    btnDelete.disabled = true;
    btnAdd.disabled = true;
    sp.innerHTML = "Element added";
    txtbox.value = "";
  });

  btnViewAll.addEventListener('click', () => {
    output.innerHTML = numArray;
  });

  btnEdit.addEventListener('click', () => {

    // var index = numArray.indexOf(txtbox.value);
    let i = 0;
    while (i < numArray.length) {
      if (txtbox.value == numArray[i])
        break;
      i++;
    }
    let newValue = prompt("Enter new element");
    numArray[i] = newValue;
    sp.innerHTML = "Element edited";
    txtbox.value = "";
    console.log(numArray);
  });

  btnDelete.addEventListener('click', () => {

    let i = 0;
    while (i < numArray.length) {
      if (txtbox.value == numArray[i])
        break;
      i++;
    }
    numArray.splice(i, 1);
    sp.innerHTML = "Element removed";
    txtbox.value = "";
  });

  btnSOP.addEventListener('click', () => {

    const tempArr = [];
    for (let i = 0; i < numArray.length; i++) {
      if (i % 2 == 1)
        tempArr.push(numArray[i]);
    }
    sp.innerHTML = "Numbers at odd positions";
    output.innerHTML = tempArr;
  });

});
