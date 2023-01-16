let Name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let items = document.getElementById('items');
let form = document.getElementById('addForm');
form.addEventListener('submit', additems);
items.addEventListener('click', deleteitem);
items.addEventListener('click', Edititems);

obj = {
  personName: '',
  personEmail: '',
  personNumber: ''
}

function additems(e) {
  e.preventDefault();
  obj.personName = Name.value;
  obj.personEmail = email.value;
  obj.personNumber = number.value;

  let newobj = JSON.stringify(obj);
  localStorage.setItem(email.value, newobj);
  // console.log(newobj)

  let items = document.getElementById('items');
  let newitem = Name.value + '=> ' + number.value + ' | ' + email.value;

  let li = document.createElement('li');
  let deletebtn = document.createElement('button');
  let Editbtn = document.createElement('button');

  li.className = 'list-group-item';
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  Editbtn.className = 'btn btn-primary btn-sm float-right Edit';

  li.innerText = newitem;
  deletebtn.innerText = 'X';
  Editbtn.innerText = 'Edit';

  li.appendChild(deletebtn);
  li.appendChild(Editbtn)
  items.appendChild(li);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
}

function deleteitem(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' ');
    // console.log(arr[arr.length - 1])
    localStorage.removeItem(arr[arr.length - 1])
    items.removeChild(li);
  }
}

function Edititems(e) {
  e.preventDefault();
  if (e.target.classList.contains('Edit')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' ');
    let global = localStorage.getItem(arr[arr.length - 1])
    let newglobal = JSON.parse(global);
    // console.log(newglobal)
    document.getElementById('name').value = newglobal.personName;
    document.getElementById('email').value = newglobal.personEmail;
    document.getElementById('number').value = newglobal.personNumber;
    localStorage.removeItem(arr[arr.length - 1])
    items.removeChild(li);
  }
}