const addbtn= document.getElementById('add-btn');
const todoinput=document.getElementById('todo-input');

const todoitemscontainer=document.getElementById('todo-item-container');


addbtn.addEventListener('click',()=>{
    const value=todoinput.value;
  //  console.log('user enter',value); //checking

    if(!value){
     return alert('Enter a valid value');
    }
    
    const li=document.createElement('li');
    li.innerText=value; // <li> value</li>

    const delbtn=document.createElement('button');
    delbtn.innerText='X';

    delbtn.addEventListener('click',function(){
        li.remove();
    })

    li.appendChild(delbtn);

    todoitemscontainer.appendChild(li)
    todoinput.value='';
});