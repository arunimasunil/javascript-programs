/*let myPromise = new Promise((resolve,reject)=>{
    let payment = true;
    if (payment){
        resolve("Payment Successfill");
    }
    else{

          reject("payment Failed");
        }
});
myPromise.then((result)=>{
    console.log(result);

})
.catch((error) => {
    console.log(error);

}); */


// await

function getData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data Received");
            
        }, 2000);
    });
}
async function displaydata(){
    console.log("fetching data");
    let result = await getData();
    console.log(result);
}
displaydata();