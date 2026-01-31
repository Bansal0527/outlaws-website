"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Classic Crew Neck Tee",
        price: "₹1,299",
        image: "/assets/tshirt.jpeg",
    },
    {
        id: 2,
        name: "Graphic Print Tee",
        price: "₹1,499",
        image: "/assets/tshirt1.jpeg",
    },
    {
        id: 4,
        name: "Premium Cotton Tee",
        price: "₹1,599",
        image: "/assets/tshirt3.jpeg",
    },
    {
        id: 5,
        name: "Striped Crew Tee",
        price: "₹1,299",
        image: "/assets/tshirt4.jpeg",
    },
    {
        id: 6,
        name: "Urban Street Tee",
        price: "₹1,499",
        image: "/assets/tshirt5.jpeg",
    },
    {
        id: 7,
        name: "Urban Street Tee",
        price: "₹1,499",
        image: "/assets/tshirt6.jpeg",
    },
    {
        id: 8,
        name: "Urban Street Tee",
        price: "₹1,499",
        image: "/assets/tshirt7.jpeg",
    },
    {
        id: 9,
        name: "Urban Street Tee",
        price: "₹1,499",
        image: "/assets/tshirt8.jpeg",
    },
];

export default function TShirtsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] bg-card">
                <Image
                    src="/assets/category-tees.jpg"
                    alt="T-Shirts Collection"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-background/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">
                            T-SHIRTS
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Premium quality tees for everyday wear
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
