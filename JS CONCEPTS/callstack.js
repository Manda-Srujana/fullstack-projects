// Lecture-1 -> Intro to callstack (LIFO)
// function hello(){
//     console.log("inside hello function");// 3rd print
//     console.log("hello");// 4th print
// }
// function demo(){
//     console.log("calling hello function");// 2nd print
//     hello();
// }
// console.log("calling demo function");// 1st print
// demo();
// console.log("done bye");// 5th print

// // output is calling demo function -> calling hello function -> inside hello function -> hello -> done bye.

// //Lecture-2 -> Visualizing call stack;
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans); //3
// }
// three();

// // Lecture-3 ->js is a single threaded
// let a=3;
// console.log(a); //3
// let b=8;
// console.log(b); //8
// console.log(a+b); //11 ->output is executed one by one bu when it comes to settime out it wont.

// setTimeout(()=>{
//     console.log("setting time"); // 2nd executed
// },2000);
// console.log("out of set time"); // 1st executed

// //Lecture-4 ->Callback hell
// let h1 = document.querySelector("h1");

// function colorChange(color,delay,nextColorchange){ //nextcolorchange is a callback
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorchange) nextColorchange();
//     },delay);
// }

// colorChange("red",1000,()=>{
//     colorChange("blue",1000,()=>{
//         colorChange("orange",1000,()=>{
//             colorChange("green",1000)
//         });
//     });
// })

//Lecture-5 ->Promises = success and failure

// 1st method: without using success and failure
// function saveToDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         console.log("sucess:data was saved");
//     }else{
//         console.log("failure: data was not saved");
//     }
// }
// saveToDb("apna college");

//2nd method: using sucesss and failure
// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }
// saveToDb("apna college",
//    ()=>{
//     console.log("sucess 1: data was saved");
//     saveToDb("hello",           //inside success observe it
//         ()=>{
//             console.log("success 2: data was saved");
//             saveToDb("world",
//                 ()=>{
//                     console.log("success 3: data was saved");
//                 },
//                 ()=>{
//                     console.log("failure 3: weak connection data was not saved");
//                 }
//             );
//         },
//         ()=>{
//             console.log("failure2 : weak connection. data was not saved");
//         }
//     );
//    },
//    ()=>{
//     console.log("failure 1: weak connection. data was not saved");
//     }
// );

//Lecture -6 -> Promises resolve and reject

// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: weak connection")
//         }
//     })
// }
// saveToDb("apna college");

// Lecture-7 -> optimizing errors using then and catch method of above promise code
// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: weak connection");
//         }
//     })
// }

// saveToDb("apna college")
// .then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });

//Lecture-8 -> promise nessting using thena nd catch method
// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: data was rejected");
//         }
//     })
// }

// saveToDb("apna college").
// then(()=>{
//     console.log("data1 saved");
//     saveToDb("hello").then(()=>{
//         console.log("data2 saved") // here if one was saved and another one is getting error so best optimised code is writting down check once.
//     })
// }).catch(()=>{
//     console.log("promise was rejected")
// })

// best code of above one
// saveToDb("apna college").
// then(()=>{
//     console.log("data 1 was saved");
//     return saveToDb("hello"); // here is the best return to not get error
// })
// .then(()=>{
//     console.log("data 2 was saved"); // if you want another nesting then
//     return saveToDb("world");
// })
// .then(()=>{
//     console.log("data 3 was saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

//Lecture-9 -> here then and catch for above code result and errors of promises.
// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success : good connection");
//         }else{
//             reject("failure: weak connection")
//         }
//     })
// }

// saveToDb("apna college").
// then((result)=>{
//     console.log("data1 was saved");
//     console.log("result of promise is :",result);
//     return saveToDb("hello");
// })
// .then((result)=>{
//     console.log("data2 was saved");
//     console.log("result of promise is:",result);
//     return saveToDb("world");
// })
// .then((result)=>{
//    console.log("data3 was saved");
//    console.log("result of promise is:",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise is:",error);
// })

//Lecture-10 -> change color code to promise refactoring old code to new code
// let h1 = document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed");//max cases not rejected;
//         },delay);
//     })
// }

// colorChange("red",1000).
// then(()=>{
//     console.log("red ccolor was changed");
//     return colorChange("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was changed");
//     return colorChange("green",1000);
// })
// .then(()=>{
//     console.log("green color was changed");
//     return colorChange("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was changed");
// })
// .catch(()=>{
//     console.log("color was rejected");
// })

//Lecture-11 ->async await
// async function demo(){
//     await colorChange("red",1000);
//     await colorChange("blue",1000);
//     await colorChange("yellow",1000);
// }
// demo();

//Lecture-12 ->Handling errors using try and catch
// async function demo(){
//    try{
//     await colorChange("red",1000);
//     await colorChange("blue",1000);
//     await colorChange("yellow",1000);
//    }
//    catch(e){
//     console.log(e);
//    }
// }
// demo();

//Lectur-13 ->Api calls Json.parse and stringify

// let jsonRes = `{"fact":"If a cat is frightened, the hair stands up fairly evenly all over the body; when the cat is threatened or is ready to attack, the hair stands up only in a narrow band along the spine and tail.","length":192}`;
// console.log(jsonRes.fact);
// let validres = JSON.parse(jsonRes);
// console.log(validres.fact);

// let studebt = {
//     name:"sharada",
//     marks:"34"
// }
// let valid = JSON.stringify(studebt);
// console.log(studebt);

//Lecture-14 ->First Api Request
// let url = "https://catfact.ninja/fact";
// fetch(url).
// then((res)=>{
//     console.log(res);
//     console.log(res.json());
// }) 
// .catch((e)=>{
//     console.log(e);
// })

//Lecture-15 ->Readable code;
// let url = "https://catfact.ninja/fact";
// fetch(url).
// then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     console.log(data.fact);
// })
// .catch((e)=>{
//     console.log(e);
// })

//Lecture-16 ->@ 2 different random facts
// let url = "https://catfact.ninja/fact";
// fetch(url).
// then((res)=>{
//     console.log(res);
//     return res.json();
// }) 
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log("data 2:",res);
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })

//Lecture-17 ->using async and await above code
// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//    try{
//     let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log("data1:",data1);
//     console.log(data1.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("data2:",data2);
//     console.log(data2.fact);
//    }catch(e){
//     console.log("error caught",e);
//    }
   
// }

//Lectur-18 -> using axios instead of fetch(url) => axios.get(url);

//Lecture-19 => Sending headers
const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}};
        let res = await axios.get(url,config);
        console.log(res);
        console.log(res.data);
    
    
       
    }
    catch(e){
        console.log(e);
    }
}
getJokes();