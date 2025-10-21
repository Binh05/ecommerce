import { ChevronLeft, ChevronRight } from "lucide-react";

function Chevron() {
    const clasNameButton =
        "rounded-full bg-gray-100 cursor-pointer p-2 transition hover:opacity-50";

    return (
        <div className="flex items-center gap-2">
            <button className={clasNameButton}>
                <ChevronLeft size={24} />
            </button>
            <button className={clasNameButton}>
                <ChevronRight size={24} />
            </button>
        </div>
    );
}

export { Chevron };
