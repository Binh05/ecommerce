import Layout from "@/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
    return (
        <Layout>
            <div className="max-w-[80%]">
                <div className="relative mt-8 flex justify-center bg-black py-4">
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
                <SectionHome title={"Today's"} header={"Flash Sales"}>
                    <div>
                        <ProductCard />
                    </div>
                    <Button>View All Products</Button>
                </SectionHome>
                <SectionHome title={"Category"} header={"Browse By Category"}>
                    <CategoryCard>
                        <img src="" alt="img category" />
                        <p>Phone</p>
                    </CategoryCard>
                </SectionHome>
                <SectionHome
                    title={"This Month"}
                    header={"Best Selling Products"}
                >
                    <div className="flex">
                        <ProductCard />
                    </div>
                </SectionHome>
                {/* banner */}
                <SectionHome
                    title={"Our Products"}
                    header={"Explore Our Products"}
                >
                    <ProductCard />
                    <Button>View All Products</Button>
                </SectionHome>
                <SectionHome title={"Featured"} header={"New rrival"}>
                    {/* content */}
                </SectionHome>
            </div>
        </Layout>
    );
}

// function Baner() {
//     return (

//     )
// }

function CategoryCard({ children }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {children}
        </div>
    );
}

function SectionHome({ title, header, children }) {
    return (
        <section className="mt-[8.75]">
            <div>
                <div className="flex items-center">
                    <div className="bg-primary h-10 w-5 rounded-sm"></div>
                    <p>{title}</p>
                </div>
                <div>
                    <h2>{header}</h2>
                    <div className="flex items-center">
                        <div>
                            <p>Days</p>
                            <p>03</p>
                        </div>
                        :
                        <div>
                            <p>Hours</p>
                            <p>23</p>
                        </div>
                        :
                        <div>
                            <p>Minutes</p>
                            <p>19</p>
                        </div>
                        :
                        <div>
                            <p>second</p>
                            <p>56</p>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </section>
    );
}

function ProductCard({ sale }) {
    return (
        <div>
            <div>
                <p>-40%</p>
                <p>tim</p>
                <p>eye</p>
                <img src="" alt="img product" />
            </div>
            <div>
                <h3>Havit HV-G92</h3>
                <div>
                    <p>$120</p>
                    {sale && <p>$160</p>}
                </div>
                <div>
                    <p>5sa0</p>
                    <p>luot danh gia</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
