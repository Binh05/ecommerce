import clsx from "clsx";

function Quantity({ quantity, setQuantity, className }) {
    return (
        <div
            className={clsx(
                "border-border flex h-full items-center rounded-lg border",
                className,
            )}
        >
            <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="hover:bg-primary h-full rounded-l-lg px-4 py-2 transition-colors"
            >
                −
            </button>
            <span className="border-border border-r border-l px-6 py-2">
                {quantity}
            </span>
            <button
                onClick={() => setQuantity(quantity + 1)}
                className="hover:bg-primary h-full rounded-r-lg px-4 py-2 transition-colors"
            >
                +
            </button>
        </div>
    );
}

export default Quantity;
