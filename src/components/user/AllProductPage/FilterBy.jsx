import clsx from "clsx";
import { ListFilterPlus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const danhMucs = [
    { id: "tai-nghe", name: "Tai nghe" },
    { id: "dien-thoai", name: "Dien thoai" },
    { id: "laptop", name: "Laptop" },
    { id: "op-lung", name: "Op lung" },
];

function FilterBy({ className }) {
    const [filter, setFilter] = useState(false);

    return (
        <section className={clsx("px-4 py-4 lg:pl-10", className)}>
            <Button
                variant="ghost"
                aria-expanded={filter}
                aria-controls="filter-dropdown"
                className="mx-auto mb-4 flex w-full cursor-pointer items-center gap-2 text-left hover:bg-transparent focus:ring-2 lg:cursor-auto lg:focus:ring-0"
                onClick={() => setFilter((prev) => !prev)}
            >
                <ListFilterPlus className="size-8" />
                <h1 className="text-3xl lg:text-2xl">Bộ lọc tìm kiếm</h1>
            </Button>

            {/* barnd */}
            <div
                id="filter-dropdown"
                aria-label="Bộ lọc tìm kiếm"
                className={clsx("lg:block", filter ? "block" : "hidden")}
            >
                <h2 className="py-2 text-xl">Theo Danh Mục</h2>
                {danhMucs.map((dm) => (
                    <CheckboxFilter id={dm.id} text={dm.name} />
                ))}
            </div>
        </section>
    );
}

function CheckboxFilter({ text, id }) {
    return (
        <div className="flex items-center gap-2 py-2">
            <Checkbox id={id} className={"size-5 border-2 border-black"} />
            <Label htmlFor={id} className={"text-lg"}>
                {text}
            </Label>
        </div>
    );
}

export default FilterBy;
