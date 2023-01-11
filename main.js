var form=document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit',addItem);

//form delete event
itemList.addEventListener('click',removeItem);

//form keyup event
filter.addEventListener('keyup',filterItems);

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



function filterItems(e){
    // text to lower case
    var text=e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
       }
       else{
        item.style.display='none';
       }
    });
}