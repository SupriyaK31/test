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
        btn.type="button";
        btn.value="Delete";
        li.appendChild(document.createTextNode(`${nameIn.value}- ${email.value}- ${number.value}`));
        li.appendChild(btn);
        userList.appendChild(li);
       
        let data ={
            name:nameIn.value,
            email:email.value,
            number:number.value
        } ;
        let data1=JSON.stringify(data);
        localStorage.setItem(email.value,data1);
        let emailInput=email.value;
        
        btn.addEventListener('click',onclick);
        function onclick(e){
          e.preventDefault();
          userList.removeChild(li);
          console.log(emailInput);
          localStorage.removeItem(emailInput);
          
        }
        nameIn.value='';
        email.value='';
        number.value='';
    }
}