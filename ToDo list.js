
const toDoList= [
    {name:'Make dinner',
    dueDate: '2024-03-10'
},
{
    name:'Wash dishes',
    dueDate: '2024-03-10'
}  ];

renderToDoList();

function renderToDoList() {
    let toDoListHTML= '';

for (let index = 0; index < toDoList.length; index++) {
    const toDoObject = toDoList[index];
    const { name, dueDate }=toDoObject;
    const html= `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    toDoList.splice(${index},1);
    renderToDoList();
    " class="delButton">Delete</button>
    `;
    toDoListHTML += html;
}


document.querySelector('.Js-todolistHTML')
.innerHTML = toDoListHTML;

}

function addToDo() {
    const inputElement= (document.querySelector('.Js-inputElement'));
    const name= inputElement.value;

    const duedateElement =(document.querySelector('.Js-duedateElement'));
    const duedate =duedateElement.value;


    //using shorthand property
        
    toDoList.push({name,
        duedate});
    

    inputElement.value = '' ;
    renderToDoList();
}