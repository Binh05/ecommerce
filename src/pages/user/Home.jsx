import Layout from "@/layout/Layout";
import { Link } from "react-router-dom";
import FlashSales from "@/components/user/HomePage/FlashSales";
import Category from "@/components/user/HomePage/category";
import BestSelling from "@/components/user/HomePage/BestSelling";
import PromoSection from "@/components/user/HomePage/PromoSection";
import ExploreProducts from "@/components/user/HomePage/ExploreProducts";
import NewArrival from "@/components/user/HomePage/NewArrival";
import Features from "@/components/user/HomePage/Features";

export default function Home() {
    return (
        <Layout>
            <div className="relative mx-auto mt-8 flex max-w-5xl justify-center bg-black py-4">
                <div className="mx-auto ml-16 flex flex-col justify-center gap-4 text-white">
                    <div className="flex items-center gap-6">
                        <img
                            src="/1200px-Apple_gray_logo 1.png"
                            alt="apple logo"
                            className="h-[49px] w-10"
                        />
                        <p>iPhone 14 series</p>
                    </div>
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
