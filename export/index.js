
// Defining variables
const list = document.getElementById('list');
const input = document.getElementById('item-input');
const addButton = document.getElementById('submit-button');

// Add and delete line items at will
function itemAdd() {
    const addText = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete-button');
    listItem.appendChild(listText);
    listText.textContent = addText;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "X";
    list.appendChild(listItem);
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

}

addButton.addEventListener('click', itemAdd);

// Allow "Enter" key to do the same thing as button press
document.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {
        return itemAdd();
        console.log('success');
    }
});

// Ability to duplicate items and edit them after they've been created

// "Priority" star system that puts high-priority items at the top of the list
