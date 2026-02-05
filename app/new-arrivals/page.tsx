"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "New Graphic Tee",
        price: "₹1,499",
        image: "/assets/product-1.jpg",
        badge: "NEW",
        category: "T-Shirts",
    },
    {
        id: 2,
        name: "Oversized Hoodie",
        price: "₹2,799",
        image: "/assets/product-2.jpg",
        badge: "NEW",
        category: "Hoodies",
    },
    {
        id: 3,
        name: "Premium Polo",
        price: "₹1,899",
        image: "/assets/product-3.jpg",
        badge: "NEW",
        category: "Polo",
    },
    {
        id: 4,
        name: "Classic Shirt",
        price: "₹2,299",
        image: "/assets/product-4.jpg",
        badge: "NEW",
        category: "Shirts",
    },
    {
        id: 5,
        name: "Oversized Drop Tee",
        price: "₹1,699",
        image: "/assets/product-5.jpg",
        badge: "NEW",
        category: "Oversized",
    },
    {
        id: 6,
        name: "Vintage Wash Tee",
        price: "₹1,399",
        image: "/assets/product-6.jpg",
        badge: "NEW",
        category: "T-Shirts",
    },
    {
        id: 7,
        name: "Zip Hoodie",
        price: "₹2,899",
        image: "/assets/product-7.jpg",
        badge: "NEW",
        category: "Hoodies",
    },
    {
        id: 8,
        name: "Striped Polo",
        price: "₹1,799",
        image: "/assets/product-8.jpg",
        badge: "NEW",
        category: "Polo",
    },
];

export default function NewArrivalsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] bg-card">
                <Image
                    src="/assets/hero-1.jpg"
                    alt="New Arrivals"
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
                            NEW ARRIVALS
                        </h1>
                        <p className="text-gray-200 dark:text-muted-foreground text-lg">
                            Fresh drops just for you
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Sort Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <p className="text-muted-foreground">
                                Showing {products.length} new products
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <select className="bg-card border border-border px-4 py-2 rounded">
                                <option>All Categories</option>
                                <option>T-Shirts</option>
                                <option>Shirts</option>
                                <option>Polo</option>
                                <option>Hoodies</option>
                                <option>Oversized</option>
                            </select>
                            <select className="bg-card border border-border px-4 py-2 rounded">
                                <option>Sort by: Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Name: A to Z</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
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
                                        {/* New Badge */}
                                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                                            {product.badge}
                                        </div>
                                        {/* Category Tag */}
                                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 text-xs">
                                            {product.category}
                                        </div>
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
