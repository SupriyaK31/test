//traversing the dom

var itemList=document.querySelector('#items');
//parent node

//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';

//console.log(itemList.parentNode.parentNode.parentNode);

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';

//console.log(itemList.parentElement.parentElement);

//child Node

//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[2]);
//itemList.children[2].style.backgroundColor='yellow';
//first child
//console.log(itemList.firstChild);
//first element child
//console.log(itemList.firstElementChild);

//last child
//console.log(itemList.lastChild);
//last element child
//console.log(itemList.lastElementChild);

//nextsibling

//console.log(itemList.nextSibling);
//next element sibling
//console.log(itemList.nextElementSibling);

//previous sibling

//console.log(itemList.previousSibling);
//previous element sibling
//console.log(itemList.previousElementSibling);

//itemList.previousElementSibling.style.color='green';


//create element

// create a div

var newDiv = document.createElement('div');
newDiv.className="hello";
newDiv.setAttribute('title','hellow div');
console.log(newDiv);

var newDivText=document.createTextNode('hello world');

newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);
