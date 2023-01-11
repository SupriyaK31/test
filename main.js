var form=document.getElementById('addForm');
var itemList =document.getElementById('items');


//form submit event

form.addEventListener('submit',addItem);

//form delete event
itemList.addEventListener('click',removeItem);


function removeItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u sure?'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// add item

function addItem(e){
    e.preventDefault();
 //get input item

 var newItem = document.getElementById('item').value;
 var li=document.createElement('li');
 // add class
 li.className="list-group-item";
li.appendChild(document.createTextNode(newItem));
// append li to list
itemList.appendChild(li);

// create delete button

var delButton= document.createElement('button');
//add class to delete button
delButton.className="btn btn-danger btn-sm float-right delete";
// apend text node
delButton.appendChild(document.createTextNode('X'));
li.appendChild(delButton);

}

