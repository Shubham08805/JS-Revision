// function
function first() {
  console.log("first function");
}
first()

// Arrow function
second = () =>{
    console.log("arrow function");
}
second()

// Higher Order - A higher-order function is a function that either takes another function(s) as arguments or returns a function as its result.
// Callback function -A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// Callback functions are commonly used in asynchronous programming

let a=10;
let b=20;

function higherOrder(callback){
    setTimeout(()=>{
        var data = {name: "Shubham", designation: "Developer"}
        callback(data);
    }, 4000)

}

function processData(data){
    console.log('Name :', data.name);
    console.log('designation :', data.designation);
}

higherOrder(processData);

// setInterval -  is a built-in function in JavaScript that repeatedly calls a function or executes a code snippet with a specified time delay between each call.
// It continues calling the function until clearInterval is called or the window is closed.
function logMessage(){
    console.log('Hello Shubham!');
}

var intervalId = setInterval(logMessage, 2000);

setTimeout(()=>{
  clearInterval(intervalId);
  console.log('Interval cleared');

},10000)


// Array 

const arr = []
for(let i=0;i<5;i++){
    arr[i]=i;
}
console.log(arr);

// Array destructuring 

const arr1 = [10,20,30,40,50];

// Array methods: map(),filter(),reduce(), sort()

// map() : It transform each element of an array according to callback function passed as an argument into it.

const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map((element)=>{
    return element * 2;
})

console.log(doubleNumbers);

// UseCases of map() - Data Transformation , Rendering Lists in UIs, Converting Data Formats

// Data Transformation

const users =[
    {id: 1, name: 'John'},
    {id: 2, name: 'Charlie'},
    {id: 3, name: 'Safah'}
];

const userNames = users.map(user => user.name);
console.log(userNames);


// Rendering Lists in UIs
const listItems = users.map(user => `<li>${user.name}</li>`);

console.log(listItems);










