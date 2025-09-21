export interface ShoppingListProps {
    shoppingList: string[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductListProps {
    products: Product[];
}
