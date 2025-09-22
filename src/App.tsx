import "./App.css";
import AnimalFilter from "./components/AnimalFilter";
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
            <AnimalFilter />
        </>
    );
}

export default App;
