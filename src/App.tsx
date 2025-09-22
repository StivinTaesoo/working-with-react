import "./App.css";
import AnimalFilter from "./components/AnimalFilter";
import BookList from "./components/BookList";
import MenuCategories from "./components/MenuCategories";
import ProductList from "./components/ProductList";
import ShoppingList from "./components/ShoppingList";
import { menuItems, products, shoppingList } from "./data";

function App() {
    return (
        <>
            <ShoppingList shoppingList={shoppingList} />
            <ProductList products={products} />
            <MenuCategories menuData={menuItems} />
            <BookList />
            <AnimalFilter />
        </>
    );
}

export default App;
