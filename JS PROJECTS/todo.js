// let todo = [];
// let req = ("enter the request what you want");

// while(true){
//   if(req == "quit"){
//     console.log("quitting app");
//     break;
//   }
//   else if(req == "list"){
//     console.log("--------------------------");
//     for(let i=0;i<todo.length;i++){
//         console.log(todo[i]);
//     }
//     console.log("--------------------------");
//   }
//   else if(req == "add"){
//     let task = ("enter the new task");
//     todo.push(task);
//     console.log("task added"); 
//   }
//   else if(req == "delete"){
//     let idx = ("enter the task index that you want to get delete");
//     todo.splice(idx,1);
//     console.log("task deleted");
//   }else{
//     console.log("wrong request");
//   }
// req = ("enter the request what you want");
  
// }

let todo=[];
let work = prompt("enter a task");
while(true){
  if(work == "quit"){
    console.log("quitting app");
    break;
  }
  else if(work == "list"){
    console.log("----------------");
    for(let i=0;i<todo.length;i++){
      console.log(todo[i]);
    }
    console.log("---------------------");
  }
  else if(work == "add"){
    let add = prompt("enter a task");
    todo.push(add);
    console.log("task added");
  }
  else if(work == "delete"){
    let dlte = prompt("enter the deleted index")
    todo.slice(dlte,1);
    console.log("task deleted");
  }
  else{
    console.log("invalid work");
  }
  work = prompt("enetr the work");
}