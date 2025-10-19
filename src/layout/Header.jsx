import { Link } from "react-router-dom";
import { User, ShoppingCart, Search } from "lucide-react";

function Header() {
    return (
        <header className="flex h-20 w-full items-center justify-center">
            <div className="flex w-[80%] items-center justify-between">
                <p className="text-2xl">Shopcart</p>
                <nav>
                    <ul className="flex items-center gap-8 font-bold">
                        <li>
                            <Link to={"/category"}>Category</Link>
                        </li>
                        <li>
                            <Link>Deals</Link>
                        </li>
                        <li>
                            <Link>What's new</Link>
                        </li>
                        <li>
                            <Link>Delivery</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-4 rounded-full border-[1px] px-3 py-1">
                    <Search />
                    <input
                        className="outline-none"
                        type="text"
                        placeholder="Search Product"
                    />
                </div>
                <div className="flex gap-4">
                    <IconText text={"Account"}>
                        <User />
                    </IconText>
                    <IconText text={"Cart"}>
                        <ShoppingCart />
                    </IconText>
                </div>
            </div>
        </header>
    );
}

function IconText({ text, children }) {
    return (
        <div className="flex gap-1">
            {children}
            <p>{text}</p>
        </div>
    );
}

export default Header;
