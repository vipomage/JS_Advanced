function addItem() {
    let valueToAdd = document.getElementById('newItemValue').value;
    let textToAdd = document.getElementById('newItemText').value;
    let option = document.createElement('option');
    option.text = textToAdd;
    option.setAttribute('value',valueToAdd);
    document.getElementById('menu').appendChild(option);
    document.getElementById('newItemValue').value = '';
    document.getElementById('newItemText').value = '';
}