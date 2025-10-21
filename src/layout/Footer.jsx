import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black py-12 text-white md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Main Footer Content */}
                <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Column 1 - Brand */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Exclusive</h3>
                        <p className="mb-4 text-gray-400">Subscribe</p>
                        <p className="mb-4 text-sm text-gray-400">
                            Get 10% off your first order
                        </p>
                        <div className="flex items-center rounded border border-gray-600 px-3 py-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent text-sm outline-none"
                            />
                            <Send
                                size={18}
                                className="cursor-pointer text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Column 2 - Support */}
                    <div>
                        <h3 className="mb-4 font-bold">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    111 Bijoy sarani, Dhaka, DH 1515,
                                    Bangladesh.
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    exclusive@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    +88015-88888-9999
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Account */}
                    <div>
                        <h3 className="mb-4 font-bold">Account</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Login / Register
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Cart
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Shop
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Quick Link */}
                    <div>
                        <h3 className="mb-4 font-bold">Quick Link</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Terms Of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5 - Download App */}
                    <div>
                        <h3 className="mb-4 font-bold">Download App</h3>
                        <p className="mb-4 text-sm text-gray-400">
                            Save $3 with App New User Only
                        </p>
                        <div className="space-y-2">
                            <img
                                src="/placeholder.svg?height=40&width=120"
                                alt="QR Code"
                                className="w-24"
                            />
                            <div className="space-y-1">
                                <button className="w-full rounded bg-gray-800 px-3 py-2 text-sm transition hover:bg-gray-700">
                                    Google Play
                                </button>
                                <button className="w-full rounded bg-gray-800 px-3 py-2 text-sm transition hover:bg-gray-700">
                                    App Store
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mb-8 flex justify-center gap-6 border-t border-gray-800 pt-8 pb-8">
                    <a
                        href="#"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-600">
                    © Copyright Rimel 2022. All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
