export default function NewArrival() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-8 w-4 rounded bg-red-500"></div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                        New Arrival
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Large Featured Item */}
                    <div className="group relative overflow-hidden rounded bg-black text-white md:col-span-2 md:row-span-2">
                        <img
                            src="/placeholder.svg?height=500&width=500"
                            alt="PlayStation 5"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        />
                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-6">
                            <h3 className="mb-2 text-2xl font-bold">
                                PlayStation 5
                            </h3>
                            <p className="mb-4 text-gray-300">
                                Black and White version of the PS5 coming out on
                                sale.
                            </p>
                            <button className="text-white underline hover:no-underline">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Top Right */}
                    <div className="group relative overflow-hidden rounded bg-black text-white">
                        <img
                            src="/placeholder.svg?height=250&width=250"
                            alt="Women's Collections"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        />
                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="mb-1 text-lg font-bold">
                                Women's Collections
                            </h3>
                            <button className="text-sm text-white underline">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Middle Right */}
                    <div className="group relative overflow-hidden rounded bg-black text-white">
                        <img
                            src="/placeholder.svg?height=250&width=250"
                            alt="Speakers"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        />
                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="mb-1 text-lg font-bold">Speakers</h3>
                            <button className="text-sm text-white underline">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Bottom Right */}
                    <div className="group relative overflow-hidden rounded bg-black text-white">
                        <img
                            src="/placeholder.svg?height=250&width=250"
                            alt="Perfume"
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        />
                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h3 className="mb-1 text-lg font-bold">Perfume</h3>
                            <button className="text-sm text-white underline">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
