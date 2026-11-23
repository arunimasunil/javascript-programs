//let student = null;
//console.log(student.name);

/*let a=10;
let b=20;
let result = a-b;
console.log("Result",result);*/

//Debugging Technic

try{
    let result = 10/0;
    console.log(result);
    throw new Error("SOMETHING WENT WRONG");
} 
catch(error){
    console.log("ERROR",error.messege);

}

