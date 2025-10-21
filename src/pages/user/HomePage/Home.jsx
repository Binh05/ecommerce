import Layout from "@/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FlashSales from "@/pages/user/HomePage/FlashSales";
import Category from "./category";
import BestSelling from "./BestSelling";
import PromoSection from "./PromoSection";
import ExploreProducts from "./ExploreProducts";
import NewArrival from "./NewArrival";
import Features from "./Features";

export default function Home() {
    return (
        <Layout>
            <div className="relative mx-auto mt-8 flex max-w-[70%] justify-center bg-black py-4">
                <div className="mx-auto ml-16 flex flex-col justify-center gap-4 text-white">
                    <p>iPhone 14 series</p>
                    <p className="max-w-[25rem] text-6xl leading-20">
                        Up to off 10% off Voucher
                    </p>
                    <Link className="underline underline-offset-6">
                        Shop Now
                    </Link>
                </div>
                <img
                    src="/src/assets/hero_endframe__iphone14_large 2.png"
                    loading="lazy"
                    sizes="(max-width: 1439px) 100vw, 1440px"
                    alt=""
                ></img>
            </div>
            <FlashSales />
            <Category />
            <BestSelling />
            {/* banner */}
            <PromoSection />
            <ExploreProducts />
            <NewArrival />
            <Features />
        </Layout>
    );
}
