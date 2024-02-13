const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        // remove o elemento pai
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    //salva os dados que estao dentro de list container
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
    // puxa os dados do localstoragem e passa pra div
}
showTask()