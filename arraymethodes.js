//FOR EACH METHODE 

let students=["manu","sanu","Ram"];
students.forEach(function (name){
    console.log(name);
}
);
//MAP

let numbers=[2,3,4,5,8];
let result = numbers.map(function(num){
    return num*2;
})
console.log(result);


let names=["Madav","Ram","Akshay","sachu"];
let boys=names.map(function(name){
    return name.toUpperCase();

}
)
console.log(boys);

//FILTER

let numbers1=[1200,2,301,44,5];
let digit = numbers1.filter(function(num){
    return num>15;
})
console.log(digit);


let numbers2 = [4,8,15,25,35,45,55];
let digits=numbers2.filter(function(digit){
    return digit%2===0 ;
})
console.log(digits);


