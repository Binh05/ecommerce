import {
    Smartphone,
    Monitor,
    Phone,
    Camera,
    Headphones,
    Gamepad2,
} from "lucide-react";

const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Phone },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 },
];

function Category() {
    return (
        <section className="border-b border-gray-200 bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-8 w-4 rounded bg-red-500"></div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                        Browse By Category
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={idx}
                                className="group flex cursor-pointer flex-col items-center justify-center rounded border border-gray-200 p-6 transition hover:bg-red-500 hover:text-white"
                            >
                                <Icon
                                    size={32}
                                    className="mb-2 group-hover:text-white"
                                />
                                <span className="text-center text-sm font-medium">
                                    {category.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Category;
