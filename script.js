const list = document.querySelector('ul');
const addItem = document.querySelector('button');
const enterItem = document.querySelector('input');

// function to add item to list
let addNewItem = () => {
    // variables for each list item
    let listItem = document.createElement('li');
    let listSpan = document.createElement('span');
    let listButton = document.createElement('button');

    // set text content for list item and button
    listItem.textContent = enterItem.value;
    listButton.textContent = "Delete";

    // set input back to empty string
    enterItem.value = "";

    // display new list item and delete button
    list.appendChild(listItem);
    listItem.appendChild(listSpan);
    listSpan.appendChild(listButton);

    // event for removing list item when hitting delete
    listButton.onclick = () => {
        list.removeChild(listItem);
    }

    // focus back on the input
    enterItem.focus();
}
// event for adding item to list when clicking the button
addItem.addEventListener('click', addNewItem);

enterItem.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        addNewItem();
    };
});