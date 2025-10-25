import clsx from "clsx";
import { UserRound } from "lucide-react";

function Avatar({ size, src, className }) {
    return (
        <div
            className={clsx(
                "bg-secondary w-fit overflow-hidden rounded-full border",
                !src && "p-2",
                size > 30 && "p-4",
                className,
            )}
        >
            {src ? (
                <img
                    src={src}
                    alt="avatar"
                    style={{ height: size + 32, width: size + 32 }}
                    className="rounded-full object-cover"
                />
            ) : (
                <UserRound size={size} className="stroke-ring" />
            )}
        </div>
    );
}

export default Avatar;
