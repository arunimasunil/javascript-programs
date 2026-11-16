//GLOBAL SCOPE(it can access through inside and out side of the function)

/*let name = "Arunima";
function displayname(){
    console.log(name);
}
displayname();
console.log(name); */

// FUNCTION SCOPE(the variable declare inside a function , only access inside the function)

/*function showdetails(){
    let name = "Anupama";
    let age = "28";
    console.log("NAME:",name);
    console.log("AGE :",age);
}
showdetails(); */

//BLOCK SCOPE

if (true){
    let age=25;
    const name = "MAYA";
    var city = "KOCHI";
    console.log("NAME:",name);
    console.log("AGE:" ,age);
    console.log("CITY :" ,city);
}
//console.log("NAME:",name); out side block it will throuhg error






