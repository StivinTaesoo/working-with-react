import React from "react";
import styles from "./ShoppingList.module.css";

interface ShoppingListProps {
    shoppingList: string[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ shoppingList }) => {
    return (
        <>
            <div className={styles.shopping_container}>
                <h2 className={styles.shopping_title}>Shopping List</h2>
                <ul className={styles.shopping_list}>
                    {shoppingList.map((item, index) => (
                        <li key={index} className={styles.shopping_item}>
                            <span className={styles.item_number}>
                                {index + 1}
                            </span>
                            <span
                                className={`${styles.item_name} ${
                                    item === "Eggs" && styles.strike_through
                                }`}
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
