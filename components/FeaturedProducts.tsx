"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Urban Graphic Tee",
        price: 1299,
        originalPrice: 1899,
        image: "/assets/product-1.jpg",
        tag: "NEW",
    },
    {
        id: 2,
        name: "Vintage Wash Hoodie",
        price: 2499,
        originalPrice: 3299,
        image: "/assets/product-2.jpg",
        tag: "BESTSELLER",
    },
    {
        id: 3,
        name: "Cargo Joggers",
        price: 1999,
        originalPrice: 2599,
        image: "/assets/product-3.jpg",
        tag: null,
    },
    {
        id: 4,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-4.jpg",
        tag: "NEW",
    },
    {
        id: 5,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-5.jpg",
        tag: "NEW",
    },
    {
        id: 6,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-6.jpg",
        tag: "NEW",
    },
    {
        id: 7,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-7.jpg",
        tag: "NEW",
    },
    {
        id: 8,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-8.jpg",
        tag: "NEW",
    },
    {
        id: 9,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-9.jpg",
        tag: "NEW",
    },
    {
        id: 10,
        name: "Street Art Tee",
        price: 1199,
        originalPrice: 1699,
        image: "/assets/product-10.jpg",
        tag: "NEW",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <div>
                        <span className="text-primary font-medium tracking-wider text-sm">
                            TRENDING NOW
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">
                            NEW ARRIVALS
                        </h2>
                    </div>
                    <Button variant="outline" className="w-fit">
                        View All Products
                    </Button>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Tag */}
                                {product.tag && (
                                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider">
                                        {product.tag}
                                    </span>
                                )}
                                {/* Quick Actions */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="h-10 w-10"
                                    >
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                </div>
                                {/* Add to Cart */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <Button variant="hero" className="w-full gap-2">
                                        <ShoppingBag className="h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div>
                                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-foreground font-semibold">
                                        ₹{product.price}
                                    </span>
                                    <span className="text-muted-foreground line-through text-sm">
                                        ₹{product.originalPrice}
                                    </span>
                                    <span className="text-primary text-sm font-medium">
                                        {Math.round(
                                            ((product.originalPrice - product.price) /
                                                product.originalPrice) *
                                            100
                                        )}
                                        % OFF
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
