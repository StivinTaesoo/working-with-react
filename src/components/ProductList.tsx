import type { Product } from "../types";

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <div className="container red_border">
                <div className="title flex_center">
                    <span className="item_number light_red_bg">2.2</span>
                    <span className="light_red_text">Product List</span>
                </div>
                <p className="task_summary">
                    Task: Render each product as Name - $Price, but highlight
                    (in red) any product with a price greater than $500.
                </p>
                {products.map((product) => (
                    <div className="item space_between red_bg">
                        <div>
                            <span className="item_name">{product.id}.</span>{" "}
                            <span className="item_name">{product.name}</span>
                        </div>
                        <span
                            className={
                                product.price > 500
                                    ? "red_text item_name"
                                    : "item_name"
                            }
                        >
                            #{product.price}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};
export default ProductList;
