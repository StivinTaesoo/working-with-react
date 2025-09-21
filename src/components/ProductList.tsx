import type { ProductListProps } from "../types";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            <div className="container">
                <h1 className="title">Product List</h1>
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
                                    : "item_name "
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
