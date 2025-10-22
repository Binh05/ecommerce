import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Chevron } from "@/components/ui/chevron";

function SortBy() {
    return (
        <section className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between bg-gray-100 px-4 py-4">
                <div className="flex items-center gap-4">
                    <p>Sắp xếp theo</p>

                    <ToggleComp />
                </div>
                <Chevron className="bg-white" />
            </div>
        </section>
    );
}

function ToggleComp() {
    return (
        <ToggleGroup
            type="single"
            variant="outline"
            spacing={2}
            size={"lg"}
            defaultValue="LienQuan"
        >
            <ToggleGroupItem
                value="LienQuan"
                className="data-[state=on]:bg-primary rounded bg-white data-[state=on]:text-white"
            >
                Liên quan
            </ToggleGroupItem>
            <ToggleGroupItem
                value="MoiNhat"
                className="data-[state=on]:bg-primary rounded bg-white data-[state=on]:text-white"
            >
                Mới nhất
            </ToggleGroupItem>
            <ToggleGroupItem
                value="BanChay"
                className="data-[state=on]:bg-primary rounded bg-white data-[state=on]:text-white"
            >
                Bán chạy
            </ToggleGroupItem>
        </ToggleGroup>
    );
}

export default SortBy;
