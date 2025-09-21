import React from "react";
import styles from "./styles/ShoppingList.module.css";
import type { ShoppingListProps } from "../types";

const ShoppingList: React.FC<ShoppingListProps> = ({ shoppingList }) => {
    return (
        <>
            <div className="container">
                <h1 className="title">Shopping List</h1>
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
