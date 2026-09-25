console.log(document.getElementById('listTasks'));
let nextId = 1;

function generateId() {
    return nextId++;
}

const tasks = [
{id: generateId(), createdAt : Date.now(), taskStatus: 'done', isImportant: true, name: 'Прочитать документацию'},
{id: generateId(), createdAt : Date.now(), taskStatus: 'done', isImportant: false, name: 'Посмотреть сериал'},
{id: generateId(), createdAt : Date.now(), taskStatus: 'todo', isImportant: true, name: 'Сходить погулять'}
]; 

// глагол	когда
// get	достать данные и вернуть
// add / create	создать новое
// delete / remove	убрать
// update	изменить существующее
// render / show	вывести на экран
const taskName = 'Сделать ногти';


function addNewTask(taskName){
    const task = {
        id: generateId(),
        createdAt: Date.now(),
        taskStatus: 'todo',
        isImportant: true,
        name: taskName
    }
    tasks.push(task);
    return task;
} 
console.log(addNewTask(taskName)); 

function deleteTask(id){
    let index = -1;

    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            index = i;
            break;
        }
    }
    if (index === -1) {
        return;
    }
    
    tasks.splice(index,1);
}
const ul = document.querySelector("#listTasks");
const input = document.querySelector("#inputTask");
const form = document.querySelector("#formTasks");

function renderTasks(taskList){
    ul.innerHTML = '';
    for(const task of taskList){
        const li = document.createElement('li');
        li.textContent = task.name;        
        ul.append(li);
    }

} 
renderTasks(tasks);
form.addEventListener('submit', function(e){
    e.preventDefault(); //предотвратить действие по умолчанию
    const text = input.value.trim();
    if(text === ''){
        return;    
    }
    addNewTask(text);
    renderTasks(tasks);
    input.value = '';
    console.log(text)
})
const stringS = " "
if (stringS.trim() == "") { console.log('да') } else { console.log('нет') }

//1.rогда пользователь вводит в поле задачу и нажимает кнопку то мы добавляем наш текст в наш массив