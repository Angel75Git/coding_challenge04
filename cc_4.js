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
};
console.log(`The total sum of sales: $${sum}`);

//Task 3
let stock = 10;
// Will use a decrement while loop to decrease by 1 until 0
while (stock > 0) {
    stock--; // Decrease by 1
    console.log(`Stock update: ${stock}`)
};
//Task 4
let responses = 0
do {
    console.log(`Current responses: ${responses}`)
    responses++
} while (responses < 4); //Only need up to 3 responses

//Task 5
let employee = {        //Create object employee
    name: "Alice",
    position: "Manager", 
    salary: 75000
};
//looping through each property and value
for (let property in employee){
    console.log(`Property: ${property}`)
    console.log(`Value: ${employee[property]}`)
};

//Task 6
//iterating through products
let products = ["PC", "Mouse", "Keyboard", "Camera"] 
for (let product of products) {
    console.log(`This product is a ${product}`)
};

//Task 7
let orders = [102, 103, 104, 105]; //each ID is a order within orders array 
orders.forEach(order => console.log(`The order ID is ${order}`));

//Task 8 
function calculateTax(amount, taxRate){
    return amount * taxRate;
} 
//using the tax rate of $1.08 at a amount of 24.00
console.log(`The total calculated tax is $${calculateTax(24, 1.08)}`);

//Task 9 
function applyDiscount(price, discountPercent){
    return sum = price - (price * discountPercent)
}
//Assuming a price of $20.50 with a 20 percent discount
console.log(`The dicsounted sale total is $${applyDiscount(21.00, 0.20)}`)

//Task 10
const calculatePoints = amountPurchase => amountPurchase/10

console.log(`Your total points accumulated is: ${calculatePoints(50)}`)
