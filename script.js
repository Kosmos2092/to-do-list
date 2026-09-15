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
console.log(tasks);
 

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
// console.log(deleteTask())

const newTask = addNewTask('Посмотреть фильм');
console.table(tasks);

deleteTask(newTask.id);
console.log(tasks);


const ul = document.querySelector("#listTasks");

function renderTasks(taskList){
    ul.innerHTML = '';
    for(const task of taskList){
        const li = document.createElement('li');
        li.textContent = task.name;        
        ul.append(li);
    }

} 
renderTasks(tasks);
renderTasks(tasks);

//1.Цикл проходит по массиву задач. Для каждой задачи создаётся li, в него кладётся текст, и li добавляется в ul.