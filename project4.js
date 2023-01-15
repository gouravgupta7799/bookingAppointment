let Name = document.getElementById('name');
let email = document.getElementById('email');
let items = document.getElementById('items')
let form = document.getElementById('addForm');
form.addEventListener('submit', additems);
items.addEventListener('click', deleteitem);
obj = {
  personName: '',
  personEmail: ''
}

function additems(e) {
  e.preventDefault();
  obj.personName = Name.value;
  obj.personEmail = email.value;
  let newobj = JSON.stringify(obj);
  localStorage.setItem(email.value, newobj);
  // console.log(newobj)

  let items = document.getElementById('items');
  let newitem = Name.value + '  ' + email.value;

  let li = document.createElement('li');
  let deletebtn = document.createElement('button');

  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  li.className = 'list-group-item';

  deletebtn.innerText = 'X'
  // deletebtn.appendChild(document.createTextNode('x'));
  li.innerText = newitem;

  li.appendChild(deletebtn);
  items.appendChild(li);
}

function deleteitem(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' ');
    console.log(arr[arr.length - 1])
    localStorage.removeItem(arr[arr.length - 1])
    items.removeChild(li);
  }
}
