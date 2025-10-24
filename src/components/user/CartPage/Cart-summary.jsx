import { Button } from "@/components/ui/button";

export default function CartSummary({ subtotal }) {
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="border-border sticky top-8 h-fit rounded-lg border p-6">
            <h2 className="text-foreground mb-6 text-lg font-semibold">
                Cart Total
            </h2>

            <div className="mb-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground font-medium">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                {/* Shipping */}
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="text-foreground font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                </div>

                {/* Divider */}
                <div className="border-border border-t"></div>

                {/* Total */}
                <div className="flex items-center justify-between">
                    <span className="text-foreground font-semibold">
                        Total:
                    </span>
                    <span className="text-foreground text-lg font-bold">
                        ${total.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-red-600 py-2 font-medium text-white hover:bg-red-700">
                Proceed to checkout
            </Button>
        </div>
    );
}
