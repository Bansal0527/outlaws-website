"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Oversized Drop Shoulder Tee",
        price: "₹1,699",
        image: "/assets/oversize.jpeg",
    },
    {
        id: 2,
        name: "Oversized Graphic Hoodie",
        price: "₹2,799",
        image: "/assets/oversize2.jpeg",
    },
    // {
    //     id: 3,
    //     name: "Oversized Comfort Fit Tee",
    //     price: "₹1,599",
    //     image: "/assets/product-1.jpg",
    // },
    // {
    //     id: 4,
    //     name: "Oversized Vintage Wash Shirt",
    //     price: "₹2,499",
    //     image: "/assets/product-2.jpg",
    // },
    // {
    //     id: 5,
    //     name: "Oversized Streetwear Tee",
    //     price: "₹1,799",
    //     image: "/assets/product-3.jpg",
    // },
    // {
    //     id: 6,
    //     name: "Oversized Longline Tee",
    //     price: "₹1,899",
    //     image: "/assets/product-4.jpg",
    // },
];

export default function OversizedPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] bg-card">
                <Image
                    src="/assets/category-accessories.jpg"
                    alt="Oversized Collection"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 dark:bg-background/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="font-display text-5xl md:text-7xl text-white dark:text-foreground mb-4">
                            OVERSIZED
                        </h1>
                        <p className="text-gray-200 dark:text-muted-foreground text-lg">
                            Comfort meets streetwear aesthetics
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-muted-foreground">
                            Showing {products.length} products
                        </p>
                        <select className="bg-card border border-border px-4 py-2 rounded">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/products/${product.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[3/4] bg-card overflow-hidden mb-4">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-muted-foreground mt-1">
                                        {product.price}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
