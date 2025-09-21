import type { MenuCategory } from "../types";

interface MenuDataProps {
    menuData: MenuCategory[];
}

const MenuCategories: React.FC<MenuDataProps> = ({ menuData }) => {
    return (
        <div className="container blue_border ">
            <div className="title flex_center ">
                <span className="item_number ">2.3</span>
                <span>Menu Categories</span>
            </div>
            <div className="d_flex space_between">
                {menuData.map((menu) => {
                    return (
                        <div className="list text_left">
                            <h3>{menu.category}</h3>
                            <ul className="text_left">
                                {menu.items.map((item) => {
                                    return (
                                        <li className="item_name">{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default MenuCategories;
