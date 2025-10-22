import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-black py-2 text-center text-sm text-white">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%! <span className="font-semibold">ShopNow</span>
            </div>

            {/* Main Header */}
            <header className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <div className="text-2xl font-bold">Exclusive</div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden items-center gap-8 md:flex">
                            <Link
                                to={"/"}
                                className="hover:text-primary text-gray-700 transition"
                            >
                                Home
                            </Link>
                            <Link
                                to={"/a-p"}
                                className="hover:text-primary text-gray-700 transition"
                            >
                                Product
                            </Link>
                            <Link
                                to={"/"}
                                className="hover:text-primary text-gray-700 transition"
                            >
                                Contact
                            </Link>
                            <Link
                                to={"/"}
                                className="hover:text-primary text-gray-700 transition"
                            >
                                About
                            </Link>
                        </nav>

                        {/* Search Bar - Desktop */}
                        <div className="hidden max-w-xs flex-1 items-center rounded bg-gray-100 px-4 py-2 lg:flex">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full bg-transparent text-sm outline-none"
                            />
                            <Search size={20} className="text-gray-400" />
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-4">
                            <button className="hover:text-primary hidden text-gray-700 transition md:block">
                                <Heart size={24} />
                            </button>
                            <button className="hover:text-primary relative text-gray-700 transition">
                                <ShoppingCart size={24} />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    2
                                </span>
                            </button>
                            <button className="hover:text-primary text-gray-700 transition">
                                <User size={24} />
                            </button>
                            <button
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && <MobileMenu />}
                </div>
            </header>
        </>
    );
}

function MobileMenu() {
    return (
        <nav className="mt-4 flex flex-col gap-4 pb-4 md:hidden">
            <Link to={"/"} className="hover:text-primary text-gray-700">
                Home
            </Link>
            <Link to={"/a-p"} className="hover:text-primary text-gray-700">
                Product
            </Link>
            <Link to={"/"} className="hover:text-primary text-gray-700">
                Contact
            </Link>
            <Link to={"/"} className="hover:text-primary text-gray-700">
                About
            </Link>

            <div className="flex items-center rounded bg-gray-100 px-4 py-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm outline-none"
                />
                <Search size={20} className="text-gray-400" />
            </div>
        </nav>
    );
}
