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
        msg.innerHTML = "enter all fields";
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        const btn=document.createElement('input');
        const editBtn = document.createElement('input');
        btn.type="button";
        btn.value="Delete";
        btn.className="btn1";
        li.appendChild(document.createTextNode(`${nameIn.value}- ${email.value}- ${number.value}`));
        li.appendChild(btn);
        li.appendChild(editBtn);
        userList.appendChild(li);
       
        let data ={
            name:nameIn.value,
            email:email.value,
            number:number.value
        } ;
        let data1=JSON.stringify(data);
        localStorage.setItem(email.value,data1);
        let emailInput=email.value;
        let nameInput=nameIn.value;
        let numberInput=number.value;
        btn.addEventListener('click',onclick);
        function onclick(e){
          e.preventDefault();
          userList.removeChild(li);
          console.log(emailInput);
          localStorage.removeItem(emailInput);
          
        }
        editBtn.type="button";
        editBtn.value="Edit";
        editBtn.className="btn1";
        editBtn.addEventListener('click',onclickEdit);
        function onclickEdit(e){
            e.preventDefault();
            nameIn.value=nameInput;
            email.value=emailInput;
            number.value=nameInput;
            userList.removeChild(li);
            localStorage.removeItem(emailInput);
        }
        nameIn.value='';
        email.value='';
        number.value='';
    }
}