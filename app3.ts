// 3. TS Arrays
// Assignment: Create a simple inventory system where you manage a list of products using arrays. Each product should have a name, price, and quantity.
// Requirements:
// Define an array of products, where each product is represented as an object with name, price, and quantity properties.
// Write functions to add a new product, update the quantity of an existing product, and calculate the total value of the inventory.
// Ensure that the types of the arrays and objects are correctly annotated.

//product array
let products: { name: string; price: number; quantity: number }[] = [
    { name: "Laptop", price: 999.99, quantity: 10 },
    { name: "Smartphone", price: 699.99, quantity: 25 },
    { name: "Tablet", price: 399.99, quantity: 15 },
    { name: "Headphones", price: 199.99, quantity: 50 },
    { name: "Smartwatch", price: 249.99, quantity: 30 },
];
console.log(products);

//function to add product
function addProduct(name: string, price: number, quantity: number): void {
    // products.push({ name: name, price: price, quantity: quantity }); //long-hand
    products.push({ name, price, quantity });
}
addProduct("Wireless Mouse", 49.99, 100);
console.log(products);

//function to update quantity
function updateQuantity(productName: string, newQuantity: number) {
    for (let product of products) {
        if (product.name == productName) {
            product.quantity = newQuantity;
        }
    }
}
updateQuantity("Wireless Mouse", 50);
console.log(products);

//function to calculate total value of inventory
function totalVal(): void {
    let total: number = 0;
    for (let product of products) {
        total = total + product.price * product.quantity;
    }
    console.log("Total value of inventory: ", total);
}
totalVal();
