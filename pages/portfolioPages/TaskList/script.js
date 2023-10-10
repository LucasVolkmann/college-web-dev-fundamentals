const list = document.querySelector("ul#tasklist")

console.log(list)

function addTask(event) {
    event.preventDefault();
    const receivedTask = document.querySelector('#newTask').value;
    if(receivedTask != ''){
        const newTask = document.createElement('li');
        newTask.innerHTML = receivedTask;
        list.appendChild(newTask);
    }
}