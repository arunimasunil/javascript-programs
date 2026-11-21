let fruits=["orange","banana","apple"];
//Push methods is used to insert element in end of the array
fruits.push("Grape");
console.log(fruits);

// pop methode is used to remove the last element of the array

let fruits1=["mango","orange","grape"];
fruits1.pop("Grape");
console.log(fruits1);


// we want to insert new element in the starting of the array ---- unshift

let fruits2=["mango","orange","grape"];
fruits2.unshift("banana");
console.log(fruits2);


// we want to remove the first element ---shift

let fruits3=["apple","plum","mango","orange","grape"];
fruits3.shift();
console.log(fruits3);


//splice is used to update, delete, add a specific index in the array= 
// 1,1 means first 1 is index position  and the second one is 1 denote delete


let fruits4=["apple","plum","mango","orange","grape"];
fruits4.splice(1,1);
console.log(fruits4);

// slice

let fruits5=["apple","plum","mango","orange","grape","grape"];
let result = fruits5.slice(1,3);
console.log(result);
console.log(fruits5);

let fruits6=["apple","plum","mango","orange","grape","grape"];
console.log(fruits6.indexOf("orange"));
console.log(fruits6.indexOf("berry"));


let numbers=[1,2,3,10,20,30];
console.log(numbers.lastIndexOf(30));

//we want to check a perticular element is present in array

let fruits7=["apple","plum","mango","orange","grape","grape"];
console.log(fruits7.includes("plum"));
console.log(fruits7.includes("banana"));

//sorting
let numbers1=[1,2,3,10,20,30];
numbers1.sort((a,b)=> a-b);
console.log(numbers1)

let numbers2=[1,2,3,10,20,30];
numbers2.sort((a,b)=> b-a);
console.log(numbers2)

//reverse

let fruits8=["apple","plum","mango","orange","berry","grape"];
fruits8.reverse();
console.log(fruits8);
