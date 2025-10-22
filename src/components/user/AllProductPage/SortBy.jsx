import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Chevron } from "@/components/ui/chevron";
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select";

function SortBy() {
    return (
        <section className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between bg-gray-100 px-4 py-4">
                <div className="flex items-center gap-4">
                    <p>Sắp xếp theo</p>
                    <ToggleComp />
                    <Combobox />
                </div>
                <Chevron className="bg-white" />
            </div>
        </section>
    );
}

function Combobox() {
    return (
        <NativeSelect className="bg-white">
            <NativeSelectOption value="" hidden>
                Giá
            </NativeSelectOption>
            <NativeSelectOption value="thap-den-cao">
                Giá: Thấp đến cao
            </NativeSelectOption>
            <NativeSelectOption value="cao-den-thap">
                Giá: Cao đến thấp
            </NativeSelectOption>
        </NativeSelect>
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
