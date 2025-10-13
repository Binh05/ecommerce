import { Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <>
            <header className="flex h-20 w-full items-center justify-center">
                <div className="flex w-[80%] items-center justify-between">
                    <p className="text-2xl">Shopcart</p>
                    <nav>
                        <ul className="flex items-center gap-8 font-bold">
                            <li>
                                <Link>Category</Link>
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
                    <div className="rounded-4xl border-[1px] px-8 py-1">
                        <input
                            className="outline-none"
                            type="text"
                            placeholder="Search Product"
                        />
                    </div>
                    <div className="flex gap-4">
                        <IconText text={"Account"} />
                        <IconText text={"Cart"} />
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}

function IconText({ text }) {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default Layout;
