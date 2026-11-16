let numbers=[20,30,40,50,60];
console.log("First Element:" ,numbers[0]);
console.log("Last Element:" ,numbers[numbers.length-1]);

//arry update

let mark=[30,78,45,87,60];
mark[2]=100;
console.log(mark);

//for in LOOP- for finding the indext number of an array

let fruits=["mango","apple","banana"];
for (let index in fruits){
    console.log(index);
}


//printing index number and value of an array

let students=["Anu","Riya","manu"];
for (let index in students){
    console.log(index,students[index]);
}

let marks1=[25,35,45,55,65];
let total=0;
//by using for in loop we are finding the totalof the array (mark)
for(let index in marks1){
    total = total + marks1[index]
    
}
console.log(total);

//FOR OFF Loop - for accessing array value 

let fruits3=["mango","apple","banana"];
for(let fruit of fruits3){
        console.log(fruit);

   }

let numbers1 = [10,12,15,22,28,30,35];
for (let even of numbers1){
    if (even % 2 ===0){
        console.log(even);
    }
    }
    
