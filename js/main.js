let input  = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let show = document.getElementById('show');
let close = document.getElementById('close');


let showmodel = ()=> {
    model.classList.toggle('display');
}

show.addEventListener('click' , showmodel);
close.addEventListener('click' , showmodel)

let shownotask = ()=>{
  if(tasks.childNodes.length == 0 ){  //aw childelementcount
      notask.classList.remove('none');
  }
}

let addtask= ()=>{
    let task = input.value;
    if(task.trim() == 0 || task.length < 2 || task.length > 20 ){
        alert("you must enter valid data");
    }else{
        notask.classList.add('none');
        tasks.innerHTML+=`<div class='task alert alert-info'> ${task}
        <button class='delete float-right btn btn-danger'>delete</button>
        </div>`
    }

    tasks.addEventListener('click' , function(ts){
     if(ts.target.classList.contains('task')){
         ts.target.classList.add('checked'); // toggle aw add
     }
    })

    input.value = ""; //3lshan b3d madef yshel el esm w abd2 aktb esm gded
}
        // else{notask.classlist.add('none');  } mkan else ely fo2
        //let realtask = document.createElement('div');
        //realtask.classList=("alert alert-info");
        //realtask.append(task);
        //tasks.append(realtask);

   
addbtn.addEventListener('click' , addtask);

let deletetask = (e)=>{
if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
shownotask();
}
}

document.addEventListener('click' , deletetask)