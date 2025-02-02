//Task 1
//Checking to see if purchase amount qualifies for discount
let purchaseAmount = 124.99;
if (purchaseAmount > 100){
    finalAmount =  purchaseAmount - 20.00;   
    console.log(`Final amount after discount: $${finalAmount}`);
};

//Task 2
let sales = [120, 85, 200, 150, 90]; //example of sales figures
console.log("Sales: ", sales);
sum = 0;  //sum of array needs to start at 0
for (let i = 0; i < sales.length; i++){ // for loop goes through each index to sum
    sum += sales[i];
}
console.log(`The total sum of sales: $${sum}`);

