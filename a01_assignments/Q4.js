//LOGIC PART
class Emp {

  constructor(empNo, empName, empEmail, empDeptid) {
    this.empNo = empNo;
    this.empName = empName;
    this.empEmail = empEmail;
    this.empDeptid = empDeptid;
  }

  getEmpDetails() {
    return "****</br>"+ this.empNo + "</br>" + this.empName + "</br>" + this.empEmail + "</br>" + this.empDeptid + "</br>****";
  }
};

class Logic {

  constructor() {
    this.empDetails = [{empNo:11,empName:"Swapnil",empEmail:"abc@red.com",empDeptid:1},
    {empNo:12,empName:"Sushant",empEmail:"def@red.com",empDeptid:2},
    {empNo:13,empName:"Swanand",empEmail:"ghi@red.com",empDeptid:3},
    {empNo:14,empName:"tushar",empEmail:"jkl@red.com",empDeptid:3},
    {empNo:15,empName:"Sumit",empEmail:"mno@red.com",empDeptid:2}];
  }

  empAlreadyExists(empno) {
    for (let index = 0; index < this.empDetails.length; index++) {
      if (this.empDetails[index].empNo == empno) {
        return true;
      } else {
        return false;
      }
    }
  }

  addEmpDetails(newEmp) {
    this.empDetails.push(newEmp);
  }

  viewAllEmpDetails() {
    let empDetailsDisplay = [];
    for (let index = 0; index < this.empDetails.length; index++) {
      let e = this.empDetails[index];
      empDetailsDisplay.push(e.getEmpDetails());
    }
    return empDetailsDisplay;
  }
};


//EVENT HANDLING PART
window.addEventListener('DOMContentLoaded', () =>{

  let empNo = document.querySelector('#empNo');
  let empName = document.querySelector('#empName');
  let empEmail = document.querySelector('#empEmail');
  let empDeptid = document.querySelector('#empDeptid');
  var html = "<table border='1|1'>"

  let btnAdd = document.querySelector('#btnAdd');
  let btnRemove = document.querySelector('#btnRemove');
  let btnModify = document.querySelector('#btnModify');
  let btnViewAll = document.querySelector('#btnViewAll');
  let btnVOD = document.querySelector('#btnVOD');
  let sp = document.querySelector('#sp');
  let y = document.querySelector('#Y');

  let logic = new Logic();

  empNo.addEventListener('blur', () =>{
    let numEntered = empNo.value;
    if (logic.empAlreadyExists(numEntered)) {
      btnModify.disabled = false;
      btnRemove.disabled = false;
      btnAdd.disabled = true;
      sp.innerHTML = "Present";
    } else {
      console.log("else");
      btnModify.disabled = true;
      btnRemove.disabled = true;
      btnAdd.disabled = false;
      sp.innerHTML = "Not Present"
    }
  });

  btnAdd.addEventListener('click', () => {
    let emp = {empNo:document.getElementById('empNo'),
              empName:document.getElementById('empName'),
              empEmail:document.getElementById('empEmail'),
              empDeptid:document.getElementById('empDeptid')};
    logic.addEmpDetails(emp);
    btnModify.disabled = true;
    btnRemove.disabled = true;
    btnAdd.disabled = true;
    sp.innerHTML = "Element added";
    empNo.value = "";
    empName.value = "";
    empEmail.value = "";
    empDeptid.value = "";
  });

  btnViewAll.addEventListener('click', () => {
    // let empDetailsDisplay = logic.viewAllEmpDetails();
    y.innerHTML = logic.viewAllEmpDetails();
  });

  btnModify.addEventListener('click', () => {
    // var index = Emp.indexOf(empNo.value);
    let i = 0;
    while (i < Emp.length) {
      if (empNo.value == Emp[i])
      break;
      i++;
    }
    let newValue = prompt("Enter new element");
    Emp[i] = newValue;
    sp.innerHTML = "Element edited";
    empNo.value = "";
    console.log(Emp);
  });

  btnRemove.addEventListener('click', () => {

    let i = 0;
    while (i < Emp.length) {
      if (empNo.value == Emp[i])
      break;
      i++;
    }
    Emp.splice(i, 1);
    sp.innerHTML = "Element removed";
    empNo.value = "";
  });

  btnVOD.addEventListener('click', () => {
    let tempId = btnVOD.value;
    const tempArr = [];
    for (let i = 0; i < Emp.length; i++) {
      if (tempId==Emp[i].empDeptid)
        tempArr.push(Emp[i].empName);
    }
    sp.innerHTML = "Employees of"+" "+tempId;
    Y.innerHTML = tempArr;
  });
});
