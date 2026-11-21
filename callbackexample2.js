function orderFood(callback){
    console.log("Food Ordered");
    setTimeout(()=> {
        console.log("Food Is Ready");
        callback();
    },3000);

}

function receiveFood(){
    console.log("Food Received");
}
orderFood(receiveFood);