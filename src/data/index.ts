import type { Product, MenuCategory } from "../types";

export const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

export const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Mouse", price: 50 },
];

export const menuItems: MenuCategory[] = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] },
];
