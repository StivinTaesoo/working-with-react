import "./App.css";
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
        </>
    );
}

export default App;
