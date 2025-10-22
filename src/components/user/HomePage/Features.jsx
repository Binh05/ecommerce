import { Truck, RotateCcw, Shield } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
    },
    {
        icon: RotateCcw,
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
    },
    {
        icon: Shield,
        title: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days",
    },
];

export default function Features() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="mb-4 rounded-full bg-gray-200 p-4">
                                    <Icon size={32} className="text-red-500" />
                                </div>
                                <h3 className="mb-2 text-lg font-bold">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
