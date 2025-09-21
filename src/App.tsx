import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingList from "./components/ShoppingList";
import { products, shoppingList } from "./data";

function App() {
    return (
        <>
            <ShoppingList shoppingList={shoppingList} />
            <ProductList products={products} />
        </>
    );
}

export default App;
