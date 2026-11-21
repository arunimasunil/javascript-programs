// falsy values --- 
//FALSE - boolean false vale , zero, negative zero, big0 - big int zer ,empty string "", null,undefined ,nan - not a number

// truthi vales - reming values are truthi
//true,1,-1,"hello","0","false"," ",[],{},function(){},

let value = 0;
if (value){
    console.log("Truthy value");
}
else{
    console.log("Falsy value");
}

let name = "";
if (name){
    console.log("Name is Availabe");
}
else{
    console.log("Name is Emppty");
}

let fruits = [];
if (fruits){
    console.log("Array is truthy value");
}
else{
    console.log("Array is Falsy value");
}

// {}- its called empty object

let student = {};
if (student){
    console.log("Object is truthy value");
}
else{
    console.log("Object is Falsy value");
}

let a= null;
let b;
if(a){
    console.log("a is truthy");
}
else{
    console.log("a is Falsy");
}
if (b){
    console.log("b is falsy");
}
else{
    console.log(" b is Falsy");
}


// if we want to check wether a value is truthi or falsy
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));


let username="";
if(username){
    console.log("Login Successfull");
}
else{
    console.log("Please Enter User Name");
}