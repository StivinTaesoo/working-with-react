import "./App.css";
import ShoppingList from "./components/ShoppingList";

function App() {
    return (
        <>
            <ShoppingList
                shoppingList={["Milk", "Bread", "Eggs", "Cheese", "Butter"]}
            />
        </>
    );
}

export default App;
