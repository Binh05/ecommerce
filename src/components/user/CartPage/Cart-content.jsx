import { useState } from "react";
import { Button } from "@/components/ui/button";
import CartItemsTable from "@/components/user/CartPage/Cart-item-table";
import CartSummary from "@/components/user/CartPage/cart-summary";

export default function CartContent() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "LCD Monitor",
            price: 650,
            quantity: 1,
            image: "/lcd-monitor.jpg",
        },
        {
            id: 2,
            name: "HI Gamepad",
            price: 550,
            quantity: 2,
            image: "/classic-gamepad.png",
        },
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) return;
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item,
            ),
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left Column - Cart Items and Actions */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Cart Items Table */}
                    <CartItemsTable
                        items={cartItems}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeItem}
                    />

                    {/* Action Buttons */}
                    <div className="flex">
                        <Button
                            variant="outline"
                            className="bg-transparent px-8"
                        >
                            Return To Shop
                        </Button>
                    </div>
                </div>

                {/* Right Column - Cart Summary */}
                <CartSummary subtotal={subtotal} />
            </div>
        </div>
    );
}
