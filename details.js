const myForm = document.querySelector('#my-form');
const nameIn = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const userList = document.querySelector('#User');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameIn.value === '' || email.value === '' || number.value === '')
    {
        msg.userList.add('error');
        msg.innerHTML = "enter all fields";
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameIn.value}- ${email.value}- ${number.value}`));
        userList.appendChild(li);
        nameIn.value='';
        email.value='';
        number.value='';
    }
}
function submitBtn(){
    var nameInput = document.getElementById('name').value;
 
    var user=localStorage.setItem('name',nameInput);
    console.log(user);
}