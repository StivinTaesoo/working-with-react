import React from "react";

interface ShoppingListProps {
    shoppingList: string[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ shoppingList }) => {
    return (
        <>
            <div className="container blue_border">
                <div className="title flex_center">
                    <span className="item_number">2.1</span>
                    <span>Shopping List</span>
                </div>
                <p className="task_summary">
                    Task: Render the list as items, but strike through "Eggs" to
                    show it's already bought.
                </p>
                <ul className="list">
                    {shoppingList.map((item, index) => (
                        <li key={index} className="item">
                            <span className="item_number">{index + 1}</span>
                            <span
                                className={
                                    item === "Eggs"
                                        ? "item_name strike_through"
                                        : "item_name"
                                }
                            >
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ShoppingList;
