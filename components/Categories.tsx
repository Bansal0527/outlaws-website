"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "T-SHIRTS",
        image: "/assets/category-tees.jpg",
        count: "48 Items",
        href: "/products/tshirts",
    },
    {
        id: 2,
        name: "SHIRTS",
        image: "/assets/category-hoodies.jpg",
        count: "32 Items",
        href: "/products/shirts",
    },
    {
        id: 3,
        name: "POLO",
        image: "/assets/category-pants.jpg",
        count: "24 Items",
        href: "/products/polo",
    },
    {
        id: 4,
        name: "HOODIES",
        image: "/assets/category-hoddies.jpeg",
        count: "28 Items",
        href: "/products/hoodies",
    },
    {
        id: 5,
        name: "OVERSIZED",
        image: "/assets/category-oversize.jpg",
        count: "16 Items",
        href: "/products/oversized",
    },
];

const Categories = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                        SHOP BY CATEGORY
                    </h2>
                    <p className="text-muted-foreground">
                        Find your perfect streetwear fit
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={category.href}
                                className="group relative block aspect-square overflow-hidden bg-card"
                            >
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-background/90 dark:via-background/20" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <h3 className="font-display text-xl md:text-2xl text-white dark:text-foreground group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-300 dark:text-muted-foreground mt-1">
                                        {category.count}
                                    </p>
                                </div>
                                {/* Hover Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
