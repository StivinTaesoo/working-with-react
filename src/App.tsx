import "./App.css";
import AnimalFilter from "./components/AnimalFilter";
import BookList from "./components/BookList";
import MenuCategories from "./components/MenuCategories";
import ProductList from "./components/ProductList";
import ShoppingList from "./components/ShoppingList";
import StudentGroups from "./components/StudentGroups";
import { menuItems, products, shoppingList, students } from "./data";

function App() {
    return (
        <>
            <ShoppingList shoppingList={shoppingList} />
            <ProductList products={products} />
            <MenuCategories menuData={menuItems} />
            <BookList />
            <AnimalFilter />
            <StudentGroups students={students} />
        </>
    );
}

export default App;
