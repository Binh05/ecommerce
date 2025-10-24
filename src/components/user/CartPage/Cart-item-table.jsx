import { Minus, Plus, Trash2 } from "lucide-react";
import Quantity from "../Quantity";
import { useState } from "react";

export default function CartItemsTable({
    items,
    onUpdateQuantity,
    onRemoveItem,
}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="border-border overflow-x-auto rounded-lg border">
            <table className="w-full">
                <thead>
                    <tr className="border-border bg-muted/50 border-b">
                        <th className="text-foreground px-4 py-4 text-left text-sm font-semibold">
                            Product
                        </th>
                        <th className="text-foreground px-4 py-4 text-left text-sm font-semibold">
                            Price
                        </th>
                        <th className="text-foreground px-4 py-4 text-left text-sm font-semibold">
                            Quantity
                        </th>
                        <th className="text-foreground px-4 py-4 text-left text-sm font-semibold">
                            Subtotal
                        </th>
                        <th className="text-foreground px-4 py-4 text-center text-sm font-semibold">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr
                            key={item.id}
                            className="border-border hover:bg-muted/30 border-b transition-colors"
                        >
                            {/* Product Column */}
                            <td className="px-4 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative h-16 w-16 flex-shrink-0">
                                        <img
                                            loading="lazy"
                                            src={
                                                item.image || "/placeholder.svg"
                                            }
                                            alt={item.name}
                                            fill
                                            className="aspect-square w-xs rounded object-cover"
                                        />
                                    </div>
                                    <span className="text-foreground text-sm font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            </td>

                            {/* Price Column */}
                            <td className="px-4 py-4">
                                <span className="text-foreground text-sm font-medium">
                                    ${item.price}
                                </span>
                            </td>

                            {/* Quantity Column */}
                            <td className="">
                                <Quantity
                                    className="w-fit"
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                />
                            </td>

                            {/* Subtotal Column */}
                            <td className="px-4 py-4">
                                <span className="text-foreground text-sm font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </td>

                            {/* Action Column */}
                            <td className="px-4 py-4 text-center">
                                <button
                                    onClick={() => onRemoveItem(item.id)}
                                    className="hover:bg-destructive/10 inline-flex items-center justify-center rounded-md p-2 transition-colors"
                                    aria-label="Remove item"
                                >
                                    <Trash2 className="text-destructive h-4 w-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
