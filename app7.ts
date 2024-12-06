// 7. TS Aliases & Interfaces
// Assignment: Design a TypeScript application for a restaurant menu management system. Use type aliases and interfaces to define menu items, categories, and orders. Ensure that the types are used consistently throughout the application.
// Requirements:
// Define type aliases and interfaces for MenuItem, Category, and Order.
// Use type aliases to simplify complex types (e.g., union types of multiple item options).
// Create interfaces to ensure consistent structure in objects representing menu items and orders.
// Implement functions to add menu items, categorize them, and process orders.

//interface for menu items
// interface menuItem {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     category: Category;
// }

//type for menuItem
type menuItem = foodItem | drinkItem | dessertItem;

//type aliases for menu items
//food items
type foodItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
};
//drink items
type drinkItem = {
    id: number;
    name: string;
    size: "small" | "medium" | "large";
    price: number;
    category: Category;
};
//drink items
type dessertItem = {
    id: number;
    name: string;
    calories: number;
    price: number;
    category: Category;
};

//interface for menu categories
interface Category {
    id: number;
    name: string;
    description: string;
}

//creating categories
const appetizerCategory: Category = {
    id: 1,
    name: "Appetizers",
    description: "Start your meal with our delicious appetizers.",
};
const mainCourseCategory: Category = {
    id: 2,
    name: "Main Course",
    description: "Enjoy our main course dishes.",
};
const dessertCategory: Category = {
    id: 3,
    name: "Desserts",
    description: "Finish your meal with a sweet treat.",
};
const drinkCategory: Category = {
    id: 4,
    name: "Beverages",
    description: "Enjoy a fresh drink",
};

//creating menu items
let menuItems: menuItem[] = [
    {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy spring rolls with a savory filling.",
        category: appetizerCategory,
        price: 5.99,
    } as foodItem,
    {
        id: 2,
        name: "Lemonade",
        size: "medium",
        category: appetizerCategory,
        price: 2.99,
    } as drinkItem,
    {
        id: 3,
        name: "Chocolate Cake",
        calories: 350,
        category: dessertCategory,
        price: 4.99,
    } as dessertItem,
];

//interface for order
interface Order {
    id: number;
    customerName: string;
    items: menuItem[];
    totalAmount: number;
    status: orderStatus;
}

//creating type for order status
type orderStatus = "complete" | "in-progess" | "pending";

//creating order
let order1: Order = {
    id: 1,
    customerName: "Alice",
    items: [menuItems[0], menuItems[1]],
    totalAmount: 7.99,
    status: "pending",
};

const orders: Order[] = [];

//process order
function processOrder(order: Order): void {
    orders.push(order);
    console.log(order);
}

//place orders
processOrder(order1);

//display orders
console.log(orders);

//display menu items
for (let item of menuItems) {
    console.log(item);
}

//categorize items
function categorizeItems(category: Category): void {
    for (let item of menuItems) {
        if (category === item.category) {
            console.log(item);
        }
    }
}
console.log("category");
//calling function
categorizeItems(appetizerCategory);
